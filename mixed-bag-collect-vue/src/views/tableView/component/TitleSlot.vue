<!--
 * @Date: 2022-12-13 17:55:04
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-13 20:49:19
 * @Description: 这是****文件
-->
<template>
  <div>
    <div v-if="type == 1" class="mytitle" :style="{height: comHeight? comHeight + 'px' : '131px'}">
      <div>{{ name }}</div>
      <div>{{ num }}</div>
    </div>
    <div v-else-if="type==2" class="mytitleMerge1" :style="{height: comHeight? comHeight + 'px' : '131px'}">
      <div>{{names[0]}}</div>
      <div>
        <div v-for="(v,index) in names" :key="index">{{index>0?v:''}}</div>
      </div>
      <div >
        <div v-for="(v,index) in nums" :key="index">{{v}}</div>
      </div>
    </div>
    <div v-else-if="type==3" class="mytitleMerge2" :style="{height: comHeight? comHeight + 'px' : '131px'}">
      <div>
        <div v-for="(v,index) in names" :key="index">{{v}}</div>
      </div>
      <div >
        <div v-for="(v,index) in nums" :key="index">{{v}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'num', 'name', 'nums', 'names', 'height'],
  computed: {
    comHeight () {
      if (this.height === 142) {
        return 163
      } else if (this.height === 164) {
        return 195
      } else if (this.height === 120) {
        return 131
      } else {
        return this.height
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mytitle {
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 100%;
  line-height: 1.1;
  & > div:first-child {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: pre-wrap;
    padding:10px;
  }
  & > div:last-child {
    display: flex;
    justify-content: center;
    border-top: 1px solid #c9c8c8;
    line-height: 32px;
  }
}
.mytitleMerge1{
    display: inline-flex;flex-direction: column;height: 120px;width: 100%;line-height: 1.1;
    &>div:nth-of-type(1){
      height: 26px;
      line-height: 26px;
    }
    &>div:nth-of-type(2){
      flex: 1;display: inline-flex;justify-content: center;overflow: hidden;
      div{
        flex: 1;
        /*writing-mode: vertical-lr;!*从左向右 从右向左是 writing-mode: vertical-rl;*!*/
        /*writing-mode: tb-lr;!*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*!*/
        white-space: pre-wrap;
        padding: 3px;
        letter-spacing: 2px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #c9c8c8;
        border-left: 1px solid #c9c8c8;
        &:first-child{
          border-top: 0 solid #c9c8c8;
          border-left: 0 solid #c9c8c8;
        }
      }
    }
    &>div:last-child{
      display: flex;
      margin-right: -1px;
      height:31px;
      border-top: 1px solid #c9c8c8;
      line-height: 31px;
      justify-content: center;
      div{
        flex: 1;
        height:31px;
        border-right: 1px solid #c9c8c8;
        line-height: 31px;
      }
    }
  }
  .mytitleMerge2{
    display: inline-flex;flex-direction: column;height: 120px;width: 100%;line-height: 1.1;
    &>div:first-child{
      flex: 1;display: inline-flex;justify-content: center;overflow: hidden;
      padding-top: 26px;
      div{
        flex: 1;
        /*writing-mode: vertical-lr;!*从左向右 从右向左是 writing-mode: vertical-rl;*!*/
        /*writing-mode: tb-lr;!*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*!*/
        white-space: pre-wrap;
        padding: 3px;
        letter-spacing: 2px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #c9c8c8;
        border-left: 1px solid #c9c8c8;
        &:first-child{
          border-top: 0 solid #c9c8c8;
          border-left: 0 solid #c9c8c8;
        }
      }
    }
    &>div:last-child{
      display: flex;
      margin-right: -1px;
      height:31px;
      border-top: 1px solid #c9c8c8;
      line-height: 31px;
      justify-content: center;
      div{
        flex: 1;
        height:31px;
        border-right: 1px solid #c9c8c8;
        line-height: 31px;
      }
    }
  }
</style>
