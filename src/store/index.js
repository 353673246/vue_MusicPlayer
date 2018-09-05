import vuex from 'vuex'
import Vue from 'vue'
import list from './list'
import player from './player'

Vue.use(vuex)

export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    list,
    player
  }
})
