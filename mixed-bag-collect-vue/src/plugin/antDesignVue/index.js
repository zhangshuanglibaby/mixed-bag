/*
 * @Date: 2022-12-13 14:45:05
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-15 12:35:13
 * @Description: 这是****文件
 */
import Vue from 'vue'
import {
  Button,
  Table,
  Card,
  ConfigProvider,
  Pagination,
  Input,
  DatePicker,
  Calendar
} from 'ant-design-vue'
// LocaleProvider 已经废弃了 换成 ConfigProvider

Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(Card.name, Card)
Vue.component(ConfigProvider.name, ConfigProvider)
Vue.component(Pagination.name, Pagination)
Vue.component(Input.name, Input)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Calendar.name, Calendar)
