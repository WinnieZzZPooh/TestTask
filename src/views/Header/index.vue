<template>
  <wrapper :class="b()">
    <div>
      <search-field
        placeholder="Номер заявки"
        width="180px"
        @input="text => search('id', text)"
      />
      <search-field
        placeholder="Наименование клиента"
        width="250px"
        @input="text => search('nameOfClient', text)"
      />
    </div>
    <counter>Выбрано: {{ selected.length }}</counter>
  </wrapper>
</template>

<script>
  import { debounce } from 'lodash'
  import { mapGetters, mapActions } from 'vuex'
  import styled from 'vue-styled-components'
  import SearchField from '@/components/SearchField'

  export const Wrapper = styled.div.attrs(() => ({
    class: 'app-header',
  }))`
    height: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      align-items: center
    }
    @media screen and (max-width: 500px) {
      padding: 20px;
      text-align: left;
    }
  `

  export const Counter = styled.div`
    padding: 0px 15px;
    font-weight: 600;
    font-size: 18px;
    @media screen and (max-width: 620px) {
       display: none
    }
  `

  export default {
    name: 'app-header',

    components: { Wrapper, SearchField, Counter },

    computed: {
      ...mapGetters('application', ['selected'])
    },

    methods: {
      ...mapActions('application', ['filter']),

      search: debounce(function (type, value) {
        this.filter({ type, value })
      }, 100)
    }
  }
</script>

