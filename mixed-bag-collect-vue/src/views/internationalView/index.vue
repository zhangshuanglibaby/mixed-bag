<!--
 * @Date: 2022-12-14 22:09:03
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-15 13:50:53
 * @Description: 这是****文件
-->
<template>
  <div class="internationalView" :class="langClass">
    <div class="lang-wrap">
      <a-button type="primary" @click="switchLanguage('zh-CN')"> 中文 </a-button>
      <a-button style="margin-left: 20px" @click="switchLanguage('en-US')"> English</a-button>
    </div>
    <div class="btn-wrap">
      <a-button type="link" @click="com = 'Home'">{{ $t('link.homeLink') }}</a-button>
      <a-button type="link" @click="com = 'Detail'">{{ $t('link.detailLink') }}</a-button>
    </div>
    <div class="components-wrap">
      <components :is="com"></components>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
export default {
  name: 'internationalView',
  components: {
    Home,
    Detail
  },
  data () {
    return {
      com: 'Home'
    }
  },
  computed: {
    langClass () {
      return this.$store.state.locale
    }
  },
  methods: {
    // 切换语言
    switchLanguage (type) {
      this.$root.Bus.$emit('switchLanguage', type)
    }
  }
}
</script>

<style lang="less" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.internationalView {
  .flex-center;
  flex-direction: column;
  height: 100vh;
  .btn-wrap {
    .flex-center
  }
  .lang-wrap {
    .flex-center;
    margin-bottom: 20px;
  }
  .components-wrap {
    .flex-center;
    flex-direction: column;
  }
}
.zh-CN {
  .detail {
    color: red;
  }
}
.en-US {
  .detail {
    color: green;
  }
}
</style>
