<!--
 * @Date: 2022-12-13 13:30:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-15 13:36:58
 * @Description: 这是****文件
-->
<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view/>
    </a-config-provider>
  </div>
</template>

<script>
// 引入antdesignvue的语言包
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
// import moment from 'moment'
// import 'moment/locale/zh-cn'
// moment.locale('zh-cn')
export default {
  data () {
    return {
      locale: zhCN,
      lang: {
        'zh-CN': zhCN,
        'en-US': enUS
      }
    }
  },
  created () {
    this.$root.Bus.$on('switchLanguage', type => {
      this.$i18n.locale = type
      console.log(type)
      this.locale = this.lang[type]
      // moment.locale(type)
      this.$store.commit('updateState', { key: 'locale', value: type })
    })
  },
  beforeDestroy () {
    // 销毁事件
    this.$root.Bus.$off('switchLanguage')
  }
}
</script>

<style lang="less">
</style>
