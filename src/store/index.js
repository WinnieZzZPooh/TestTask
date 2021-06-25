import Vue from 'vue'
import Vuex from 'vuex'
import application from './Application'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    application
  }
})
