import Vue from 'vue'
import { multiFilter, cleanObject } from '@/utils'
import { Task } from '@/models/Task'
import api from '@/api'

const nullState = {
  tasks: [],
  selected: [],
  expanded: [],
  filter: {},
  loading: false
}

const state = cleanObject(nullState)

const getters = {
  tasks: state => multiFilter(state.tasks, state.filter),
  selected: state => state.selected,
  expanded: state => state.expanded,
  loading: state => state.loading,
}

const actions = {
  async loadTasks ({ commit }) {
    try {
      commit('setLoading', true)
      const tasks = await api.getTasks()
      commit('setTasks', tasks.map(raw => new Task(raw)))
    } catch (e) {
      commit('setTasks', [])
    } finally {
      commit('setLoading', false)
    }
  },
  filter ({ commit }, data) {
    commit('setFilter', data)
  },
  selectTask ({ commit }, id) {
    commit('setSelectedTasks', id)
  },
  expandTask ({ commit }, id) {
    commit('setExpandedTasks', id)
  }
}

const mutations = {
  setTasks (state, data) {
    state.tasks = data
  },

  setFilter (state, { type, value }) {
    Vue.set(state.filter, type, value)
  },

  setSelectedTasks (state, id) {
    const index = state.selected.findIndex(i => i === id)
    if (index === -1) {
      state.selected.push(id);
    } else {
      state.selected.splice(index, 1)
    }
  },

  setExpandedTasks (state, id) {
    const index = state.expanded.findIndex(i => i === id)
    if (index === -1) {
      state.expanded.push(id);
    } else {
      state.expanded.splice(index, 1)
    }
  },

  setLoading (state, isLoading) {
    state.loading = isLoading
  },

  clear (state) {
    Object.assign(state, cleanObject(nullState))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
