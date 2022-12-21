<!--
 * @Date: 2022-12-21 15:25:03
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-21 21:07:33
 * @Description: 这是****文件
-->
<template>
  <div class="imgView">
    <img class="img" src="http://szmf-html-test.oss-cn-beijing.aliyuncs.com/files/edit/QQ截图 2022-06-29 10-03-05-123456789-1659671819000.png" alt="">
    <div class="img">
      <img-com v-for="i in 10" :key="i" src="http://szmf-html-test.oss-cn-beijing.aliyuncs.com/files/edit/QQ截图 2022-06-29 10-03-05-123456789-1659671819000.png"></img-com>
    </div>
  </div>
</template>

<script>
import ImgCom from '@/components/ImgCom/index.vue'
export default {
  name: 'imgView',
  components: {
    ImgCom
  }
}
</script>

<style lang="less">
.imgView {
  .img {
    width: 200px;
    height: 200px;
  }
}
</style>
