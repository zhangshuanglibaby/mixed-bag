<!--
 * @Date: 2022-12-14 13:44:20
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-14 16:16:08
 * @Description: 这是****文件
-->
<template>
  <div class="pageThree">
    <a-button @click="handleBack">返回</a-button>
    <div>pageThree</div>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.pageThree {
  width:100%;
  height: 500px;
  background: olivedrab;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fff;
}
</style>
