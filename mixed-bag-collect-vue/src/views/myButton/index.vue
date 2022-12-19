<!--
 * @Date: 2022-12-19 21:46:43
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-19 21:58:51
 * @Description: 这是****文件
-->
<template>
  <div>
    <!-- 无样式 -->
    <a-button type="none" class="my-button" @click="handleClick">无样式按钮</a-button>
    <!-- 默认样式 -->
    <a-button type="primary" @click="handleClick">默认样式</a-button>
  </div>
</template>

<script>
export default {
  name: 'myButton',
  methods: {
    handleClick () {
      console.log('触发了')
    }
  }
}
</script>

<style>
.my-button {
  width: 100px;
  height: 100px;
  background: pink;
}
</style>
