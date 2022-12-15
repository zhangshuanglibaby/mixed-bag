/*
 * @Date: 2022-12-13 14:45:05
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-15 20:06:58
 * @Description: 这是****文件
 */
import Vue from 'vue'
import {
  Button,
  Table,
  Card,
  ConfigProvider, // LocaleProvider 已经废弃了 换成 ConfigProvider
  Pagination,
  Input,
  DatePicker,
  Calendar,
  Icon,
  message
  // Message
} from 'ant-design-vue'

// 注册全局属性$message
Vue.prototype.$message = message
message.config({
  duration: 2
})

Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(Card.name, Card)
Vue.component(ConfigProvider.name, ConfigProvider)
Vue.component(Pagination.name, Pagination)
Vue.component(Input.name, Input)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Calendar.name, Calendar)
Vue.component(Icon.name, Icon)
// Vue.component(Message.name, Message)
