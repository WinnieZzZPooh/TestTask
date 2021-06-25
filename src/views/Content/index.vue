<template>
  <masonry
    :class="b()"
    :block-width="320"
  >
    <expanded-card
      v-for="(task, i) in tasks"
      :task="task"
      :key="i"
      :selected="selected"
      :expanded="expanded"
      @select="selectTask"
      @expand="expandTask"
    />
  </masonry>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ExpandedCard from '@/components/ExpandedCard'

  export default {
    name: 'app-content',
    components: {
      ExpandedCard
    },

    computed: {
      ...mapGetters('application', ['tasks', 'selected', 'expanded'])
    },

    methods: {
      ...mapActions('application', ['selectTask', 'expandTask'])
    }
  }
</script>

