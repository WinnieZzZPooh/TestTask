<template>
  <search-box
    :class="b()"
    :width="width"
  >
    <wrapper
      role="search"
      :class="b('wrapper')"
    >
      <text-input
        type="search"
        v-model="text"
        :placeholder="placeholder"
        :class="b('input')"
        @input="onInput"
      />
      <search-icon :class="b('search-icon')">
        <svg role="img">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13" />
        </svg>
      </search-icon>
      <reset-icon
        :class="b('reset-icon', { hide: !text })"
        @click="clear"
      >
        <svg role="img">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3" />
        </svg>
      </reset-icon>
    </wrapper>

    <div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"/></symbol>
        <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"/></symbol>
      </svg>
    </div>
  </search-box>
</template>

<script>
  /**
   * @displayName SearchField
   *
   * Поле поиска с кнопкой отчистки. Эмитит событие input
   */
  import { SearchBox, Wrapper, TextInput, SearchIcon, ResetIcon } from './styled-components'

  export default {
    name: 'search-field',

    components: {
      SearchBox,
      Wrapper,
      TextInput,
      SearchIcon,
      ResetIcon,
    },

    props: {
      placeholder: {
        type: String,
        default: 'Поиск'
      },
      width: {
        type: String,
        default: '200px'
      }
    },

    data () {
      return {
        text: ''
      }
    },

    methods: {
      onInput (text) {
        this.$emit('input', text)
      },
      clear () {
        this.text = ''
      }
    }
  }
</script>

