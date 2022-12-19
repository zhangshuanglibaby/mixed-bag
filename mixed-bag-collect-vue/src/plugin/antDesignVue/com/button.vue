<!--
 * @Date: 2022-12-19 14:02:47
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-19 22:12:01
 * @Description: 这是****文件
-->
<script>
// type为无样式按钮
// 其他参数和ant-design-vue一样
import debounce from 'lodash/debounce'
import { Button } from 'ant-design-vue'

export default {
  name: 'dmc-button',
  components: {
    dmcButton: Button
  },
  render () {
    const scopedSlots = Object.keys(this.$slots).reduce((total, key) => {
      total[key] = this.$slots[key]
      return total
    })
    /* eslint-disable */ 
    const btnClick = (...arg) => {
      this.$listeners.click && this.$listeners.click(...arg)
    }
    console.log(btnClick, 'btnClickbtnClick') // 返回的是函数
    const click = debounce(btnClick, 2000, { leading: true, trailing: false })
    const { type } = this.$attrs
    /* eslint-disable */
    return type && type === 'none' ? (
      // 无样式
      <div
        { ...{
          attrs: { ...this.$attrs },
          on: { ...this.$listeners, click },
          scopedSlots: scopedSlots
        }}>
        { this.$slots.default }
      </div>
    ) : (
      // ant-design-vue 按钮
      <dmcButton
        {...{
          attrs: { ...this.$attrs },
          on: { ...this.$listeners, click },
          scopedSlots
        }}>
        { this.$slots.default }
      </dmcButton>
    )
  }
}
</script>
