<template>
  <div id="app">
    <transition name="welcome">
      <progress-linear v-if="loading" />
      <main-viewport v-else />
    </transition>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import MainViewport from '@/MainViewport'
  import ProgressLinear from '@/components/ProgressLinear'

  export default {
    name: 'App',

    components: {
      ProgressLinear,
      MainViewport
    },

    computed: {
      ...mapGetters('application', ['loading'])
    },

    async created () {
      await this.loadTasks()
    },

    beforeDestroy () {
      this.clear()
    },

    methods: {
      ...mapActions('application', ['loadTasks', 'clear'])
    }
  }
</script>

<style>
  html {
    overflow: hidden;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #fafbfd;
    color: #5863a2;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .full-height {
    height: 100%
  }

  .welcome-enter-active,
  .welcome-leave-active {
    transition: all .5s;
  }

  .welcome-enter, .welcome-leave-to {
    transform: scale(0);
    opacity: 0;
  }
</style>
