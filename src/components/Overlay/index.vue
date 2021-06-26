<template>
  <overlay-container :class="b()">
    <slot />
  </overlay-container>
</template>

<script>
  /**
   * @displayName Ovelay
   *
   * Компонент отображения альтернативной информации
   */
  import styled from 'vue-styled-components'

  const OverlayContainer = styled.label.attrs(() => ({
    class: 'pure-checkbox__label',
  }))`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    position: relative;
  `
  export default {
    name: 'overlay',

    components: {
      OverlayContainer
    }
  }
</script>
