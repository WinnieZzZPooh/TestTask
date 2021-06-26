<template>
  <content-wrapper :class="b()">
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
  </content-wrapper>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ExpandedCard from '@/components/ExpandedCard'
  import Overlay from '@/components/Overlay'
  import styled from "vue-styled-components";

  const ContentWrapper = styled.div.attrs(() => ({
    class: 'app-content',
  }))`
    height: calc(100% - 75px)
  `

  export default {
    name: 'app-content',
    components: {
      ContentWrapper,
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

