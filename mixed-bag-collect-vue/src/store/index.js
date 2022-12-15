/*
 * @Date: 2022-12-13 13:30:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-15 11:07:25
 * @Description: 这是****文件
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isBack: false, // 记录当前是否是后退操作
    historyRouter: [], // 历史路由栈
    locale: 'zh-CN' // 存储的语言
  },
  getters: {
  },
  mutations: {
    updateState (state, { key, value }) {
      state[key] = value
    },

    goRouter (state, path) {
      state.historyRouter.push(path)
    },

    backRouter (state) {
      state.historyRouter.pop()
    }
  },
  actions: {
  },
  modules: {
  }
})
