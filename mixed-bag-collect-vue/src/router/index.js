/*
 * @Date: 2022-12-13 13:30:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-21 15:27:02
 * @Description: 这是****文件
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/tableView',
    name: 'tableView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/tableView/index.vue')
  },
  {
    path: '/transitionView',
    name: 'transitionView',
    component: () => import('@/views/transitionView/index.vue'),
    children: [{
      path: 'pageOne',
      name: 'pageOne',
      component: () => import('@/views/transitionView/children/pageOne.vue')
    }, {
      path: 'pageTwo',
      name: 'pageTwo',
      component: () => import('@/views/transitionView/children/pageTwo.vue')
    }, {
      path: 'pageThree',
      name: 'pageThree',
      component: () => import('@/views/transitionView/children/pageThree.vue')
    }]
  },
  {
    path: '/internationalView',
    name: 'internationalView',
    component: () => import('@/views/internationalView/index.vue')
  },
  {
    path: '/autographView',
    name: 'autographView',
    component: () => import('@/views/autographView/index.vue')
  },
  {
    path: '/myButton',
    name: 'myButton',
    component: () => import('@/views/myButton/index.vue')
  },
  {
    path: '/imgView',
    name: 'imgView',
    component: () => import('@/views/imgView/index.vue')
  }
]

const router = new VueRouter({
  routes
})

// 拦截push
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  store.commit('updateState', { key: 'isBack', value: false })
  store.commit('goRouter', location.path)
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

// 监听后退
const back = () => {
  store.commit('updateState', { key: 'isBack', value: true })
  store.commit('backRouter')
}
window.addEventListener('popstate', back)

export default router
