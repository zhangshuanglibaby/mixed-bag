<!--
 * @Date: 2022-12-14 22:11:48
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-15 12:35:36
 * @Description: 这是****文件
-->
<template>
  <div class="detail">
    <p>{{ $t('detail.desc') }}</p>
    <a-pagination
      show-quick-jumper
      :default-current="2"
      :total="500"
      show-less-items
    />
   <a-date-picker style="margin-top: 10px" />
   <a-calendar :fullscreen="false" />
  </div>
</template>

<script>
export default {
  name: 'DetailCom'
}
</script>

<style>

</style>
