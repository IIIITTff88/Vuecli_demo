import Vue from 'vue'
import Vuex from 'vuex'
// import { stat } from 'fs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      msg: 'hello world',
      code: 1
    },
    obj: {
      name: 'jack',
      age: 20
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    add (state, num) {
      state.count += num
    },
    del (state, key) {
      delete state.obj[key]
    }
  },
  actions: {
    changVal (context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    }
  }
})
