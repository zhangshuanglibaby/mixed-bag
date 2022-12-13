<!--
 * @Date: 2022-12-13 15:30:35
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-13 18:51:12
 * @Description: 这是****文件
-->
<template>
  <div>
    <a-table
    :columns="columns"
    v-bind="$attrs" v-on="$listeners">
      <template v-for="name in Object.keys($scopedSlots)" :slot="name">
        <slot :name="name"></slot>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.ant-table-bordered .ant-table-tbody > tr > td {
  padding: 4px;
}
/deep/.ant-table-bordered .ant-table-thead > tr > th {
  padding: 0;
}
/deep/.ant-table-header-column {
  width: 100%;
}
</style>
