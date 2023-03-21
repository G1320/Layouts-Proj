import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { stationStore } from './station.store.js'
import { reviewStore } from './review.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    stationStore,
    reviewStore
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
