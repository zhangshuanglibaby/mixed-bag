/*
 * @Date: 2022-12-13 13:30:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-13 14:51:02
 * @Description: 这是****文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugin/antDesignVue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
