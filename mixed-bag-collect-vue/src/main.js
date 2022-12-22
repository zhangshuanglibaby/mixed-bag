/*
 * @Date: 2022-12-13 13:30:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-22 00:39:09
 * @Description: 这是****文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugin/antDesignVue'
import i18n from './plugin/vuei18n/index'
import './global/ directives'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  data: { Bus: new Vue() } // 定义事件总线
}).$mount('#app')
