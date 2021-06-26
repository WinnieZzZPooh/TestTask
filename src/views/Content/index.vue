<template>
  <div :class="b(null, 'full-height')">
    <masonry
      v-if="tasks.length"
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
    <overlay v-else>Нет данных</overlay>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ExpandedCard from '@/components/ExpandedCard'
  import Overlay from '@/components/Overlay'

  export default {
    name: 'app-content',
    components: {
      ExpandedCard,
      Overlay
    },

    computed: {
      ...mapGetters('application', ['tasks', 'selected', 'expanded'])
    },

    methods: {
      ...mapActions('application', ['selectTask', 'expandTask'])
    }
  }
</script>

