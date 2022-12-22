<!--
 * @Date: 2022-12-21 15:25:03
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-22 00:59:39
 * @Description: 这是****文件
-->
<template>
  <div class="imgView">
    <div class="img" v-for="i in 10" :key="i">
      <img class="obserber-img" v-lazyload  data-src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fd%2F53be3420d111d.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674232952&t=defec6bad54332c52a283cfd4f8a1e63" alt="">
    </div>
    <div class="img">
      <img-com src="http://szmf-html-test.oss-cn-beijing.aliyuncs.com/files/edit/QQ截图 2022-06-29 10-03-05-123456789-1659671819000.png"></img-com>
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
    width: 400px;
    height: 200px;
  }
  .obserber-img {
    .img;
    opacity: 0;
    padding: 20px;
    transition: opacity 0.5s ease-in;
  }
  .active {
    opacity: 1;
  }
}
</style>
