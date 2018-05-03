
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './action'
import getters from './getters'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 做模块化处理,每个功能一个store.js文件,然后统一在这边引入
  // modules: {
  //   musicStore
  // }
  actions,
  getters,
  state,
  mutations
})

export default store
