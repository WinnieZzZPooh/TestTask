import Vue from 'vue'
const componentName = 'masonry'

const props = {
  blockWidth: {
    type: Number,
    required: true
  },
  tag: {
    type: String,
    default: 'div'
  },
  gutter: {
    type: Number,
    default: 0
  },
  css: {
    type: Boolean,
    default: true
  },
  columnTag: {
    type: String,
    default: 'div'
  },
  columnClass: {
    type: Array,
    default: () => []
  }
}

const breakpointValue = (mixed, windowWidth) => {
  const valueAsNum = parseInt(mixed)

  if (valueAsNum > -1) {
    return mixed
  } else if (typeof mixed !== 'object') {
    return 0
  }

  let matchedBreakpoint = Infinity
  let matchedValue = mixed.default || 0

  for (let k in mixed) {
    const breakpoint = parseInt(k)
    const breakpointValRaw = mixed[breakpoint]
    const breakpointVal = parseInt(breakpointValRaw)

    if (isNaN(breakpoint) || isNaN(breakpointVal)) {
      continue
    }

    const isNewBreakpoint = windowWidth <= breakpoint && breakpoint < matchedBreakpoint

    if (isNewBreakpoint) {
      matchedBreakpoint = breakpoint
      matchedValue = breakpointValRaw
    }
  }

  return matchedValue
}

const component = {
  props,

  data() {
    return {
      displayColumns: 2,
      displayGutter: 0
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.reCalculate()
    })

    if (window) {
      window.addEventListener('resize', this.reCalculate)
    }
  },

  updated () {
    this.$nextTick(() => {
      this.reCalculate()
    })
  },

  beforeDestroy () {
    if (window) {
      window.removeEventListener('resize', this.reCalculate)
    }
  },

  methods: {
    reCalculate () {
      const previousWindowWidth = this.windowWidth

      this.windowWidth = (window ? window.innerWidth : null) || Infinity

      if (previousWindowWidth === this.windowWidth) {
        return
      }

      this._reCalculateColumnCount(this.windowWidth)
      this._reCalculateGutterSize(this.windowWidth)
    },

    _reCalculateGutterSize(windowWidth) {
      this.displayGutter = breakpointValue(this.gutter, windowWidth)
    },

    _reCalculateColumnCount(windowWidth) {
      let calculatedColumns = Math.floor(this.windowWidth / this.blockWidth)
      let newColumns = breakpointValue(calculatedColumns, windowWidth)

      newColumns = Math.max(1, Number(newColumns) || 0)
      this.displayColumns = newColumns
    },

    _getChildItemsInColumnsArray() {
      const columns = []
      let childItems = this.$slots.default || []

      if (childItems.length === 1 && childItems[0].componentOptions && childItems[0].componentOptions.tag === 'transition-group') {
        childItems = childItems[0].componentOptions.children
      }

      for (let i = 0, visibleItemI = 0; i < childItems.length; i++, visibleItemI++) {
        if(!childItems[i].tag) {
          visibleItemI--

          continue
        }

        const columnIndex = visibleItemI % this.displayColumns

        if (!columns[columnIndex]) {
          columns[columnIndex] = []
        }

        columns[columnIndex].push(childItems[i])
      }

      return columns
    }
  },

  render(createElement) {
    const columnsContainingChildren = this._getChildItemsInColumnsArray()
    const isGutterSizeUnitless = parseInt(this.displayGutter) === this.displayGutter * 1
    const gutterSizeWithUnit =  isGutterSizeUnitless ? `${this.displayGutter}px` : this.displayGutter

    const columnStyle = {
      boxSizing: 'border-box',
      backgroundClip: 'padding-box',
      width: `${100 / this.displayColumns}%`,
      border: '0 solid transparent',
      borderLeftWidth: gutterSizeWithUnit
    }

    const columns = columnsContainingChildren.map((children, index) => {
      return createElement(this.columnTag, {
        key: index + '-' + columnsContainingChildren.length,
        style: this.css ? columnStyle : null,
        class: this.columnClass
      }, children)
    })

    const containerStyle = {
      display: ['-webkit-box', '-ms-flexbox', 'flex'],
      marginLeft: `-${gutterSizeWithUnit}`
    }

    return createElement(
      this.tag,
      this.css ? { style: containerStyle } : null,
      columns
    )
  }
}

const Plugin = function () {}

Plugin.install = function (Vue, options) {
  if (Plugin.installed) {
    return
  }

  if(options && options.name) {
    Vue.component(options.name, component)
  } else {
    Vue.component(componentName, component)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Plugin)
}

Vue.use(Plugin)
