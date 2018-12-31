import Vue from 'vue'
import Vuex from 'vuex'

import { track } from './modules/track'
import { user } from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    track,
    user
  }
})

export default store
