<template>
  <div :class="b(null, 'full-height')">
    <app-header />
    <app-content />
  </div>
</template>

<script>
  import AppHeader from '@/views/Header'
  import AppContent from '@/views/Content'

  export default {
    name: 'main-viewport',
    components: {
      AppHeader,
      AppContent
    }
  }
</script>

