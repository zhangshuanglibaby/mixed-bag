<!--
 * @Date: 2022-12-14 13:40:52
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-14 20:33:16
 * @Description: 这是****文件
-->
<template>
  <div class="transitionView">
    <div class="button-wrap">
       <a-button @click="handleJump('pageOne')">跳转pageOne</a-button>
      <a-button @click="handleJump('pageTwo')">跳转pageTow</a-button>
      <a-button @click="handleJump('pageThree')">跳转pageThree</a-button>
    </div>
   <div class="wrapper">
     <transition :name="transitionName">
      <router-view></router-view>
    </transition>
   </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'transitionView',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  methods: {
    handleJump (path) {
      this.$router.push({ path: `/transitionView/${path}` })
    }
  },
  computed: {
    ...mapState(['isBack', 'historyRouter'])
  },
  watch: {
    $route: {
      handler (to, from) {
        console.log(to, 'tooooooo')
        const historyRouterLength = this.historyRouter.filter(path => path === to.path).length
        console.log(this.historyRouter, 'historyRouterhistoryRouterhistoryRouter')
        // 如果在historyRouter历史栈中找到了要去的路径～ 表示是返回
        if (historyRouterLength >= 2) {
          this.$store.commit('updateState', { key: 'isBack', value: true }) // 表示返回
          const index = this.historyRouter.findIndex((path) => path === to.path)
          this.historyRouter.splice(index, 1) // 删掉重复的路径
          this.$store.commit('backRouter') // 因为是返回 所以要出栈了
        }
        if (this.isBack) {
          this.transitionName = 'slide-right'
          return
        }
        this.transitionName = 'slide-left'
        console.log(this.historyRouter, 'historyRouterhistoryRouterhistoryRouter')
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
.transitionView {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .button-wrap {
    margin: 20px 0;
  }
  .wrapper {
    width: 100%;
    position: relative;
    flex: 1;
  }
  .slide-left-enter-active {
    position: absolute;
    animation-name: slide-left-in;
    animation-duration: .3s;
  }
  .slide-left-leave-active {
     position: absolute;
    animation-name: slide-left-out;
    animation-duration: .3s;
  }
  .slide-right-enter-active {
     position: absolute;
    animation-name: slide-right-in;
    animation-duration: .3s;
  }
  .slide-right-leave-active {
    position: absolute;
    animation-name: slide-right-out;
    animation-duration: .3s;
  }
  @keyframes slide-left-in {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slide-left-out {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes slide-right-in{
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slide-right-out  {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
}
</style>
