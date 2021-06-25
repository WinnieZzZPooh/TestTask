<template>
  <chip
    :class="b()"
    :color="color"
    :title="label"
  >
    {{ label }}
  </chip>
</template>

<script>
  /**
   * @displayName Chip
   *
   * Компонент чип контейнер, для отображения тегов
   */
  import styled from 'vue-styled-components'
  import { invertColor } from '@/utils'

  export const Chip = styled('div', { color: String }).attrs(() => ({
    class: 'chip-item',
  }))`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px 10px;
    margin: 0px 8px 8px 0;
    width: fit-content;
    max-width: 120px;
    border-radius: 12px;
    background: ${props => props.color}
    color: ${props => invertColor(props.color, true)}
  `

  export default {
    name: 'chip-item',

    components: { Chip },

    props: {
      label: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '#b7bcde'
      }
    }
  }
</script>
