<template>
  <div
    :class="b()"
    @click.prevent.stop="$emit('check')"
  >
    <input
      :class="b('checkbox')"
      id="cbx"
      type="checkbox"
      style="display: none"
    />
    <checkbox-label
      :checked="checked"
      :class="b('label', { checked })"
      for="cbx"
    >
      <span>
        <svg width="12px" height="10px" viewbox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1" />
        </svg>
      </span>
      <span />
    </checkbox-label>
  </div>
</template>

<script>
  /**
   * @displayName PureCheckbox
   *
   * Компонент чекбокса, может принимать checked, эмитит по клику событие check
   */
  import styled from 'vue-styled-components'

  const CheckboxLabel = styled('label', { checked: Boolean }).attrs(() => ({
    class: 'pure-checkbox__label',
  }))`
    margin: auto;
    user-select: none;
    cursor: pointer;
    span {
      display: inline-block;
      vertical-align: middle;
      transform: translate3d(0, 0, 0);
    }
    span:first-child {
      position: relative;
      width: 18px;
      height: 18px;
      border-radius: 3px;
      transform: scale(1);
      vertical-align: middle;
      border: 1px solid #9098A9;
      transition: all 0.2s ease;
      background: ${props => props.checked ? '#506EEC' : 'none'};
      border-color: ${props => props.checked ? '#506EEC' : 'none'};
    }
    span:first-child svg {
      position: absolute;
      top: 4px;
      left: 3px;
      fill: none;
      stroke: #FFFFFF;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 16px;
      transition: all 0.3s ease;
      transition-delay: 0.1s;
      transform: translate3d(0, 0, 0);
      stroke-dashoffset: ${props => props.checked ? '0' : '16px'};
    }
    span:first-child:before {
      content: "";
      width: 100%;
      height: 100%;
      background: #506EEC;
      display: block;
      transform: scale(0);
      opacity: 1;
      border-radius: 50%;
      transform: ${props => props.checked ? 'scale(3.5)' : 'scale(0)'};
      opacity: ${props => props.checked ? '0' : '1'};
      transition: ${props => props.checked ? 'all 0.6s ease' : 'none'};
    }
    span:last-child {
      padding-left: 8px;
    }
    :hover span:first-child {
      border-color: #506EEC;
    }
  `

  export default {
    name: 'pure-checkbox',
    components: { CheckboxLabel },

    props: {
      checked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

