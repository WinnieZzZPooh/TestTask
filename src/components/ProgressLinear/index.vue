<template>
  <wrapper :class="b()">
    <indeterminate :class="b({ indeterminate: true })" />
  </wrapper>
</template>

<script>
  /**
   * @displayName ProgressLinear
   *
   * Прогрессбар. Отображается во время асинхронных операции
   */
  import { Wrapper, Indeterminate } from './styled-components'

  export default {
    name: 'progress-linear',
    components: {
      Wrapper,
      Indeterminate
    },
  }
</script>
