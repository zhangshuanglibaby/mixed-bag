/*
 * @Date: 2022-12-14 21:21:24
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-15 11:58:13
 * @Description: 这是****文件
 */
import Vue from 'vue'
import Vuei18n from 'vue-i18n'

Vue.use(Vuei18n)

// 这些中英互译其实可以在后台做个相关的字典管理
// 模拟从后台获取中英互译数据
/*
假设数据结构
{
dictType: "common", // 分类
dictLabel: "user", // 描述
dictZhValue: "大栗子", // 中文值
dictEnValue: "lily" // 英文值
}
*/
const i18nData = () => {
  return [{
    dictType: 'link',
    dictLabel: 'homeLink',
    dictZhValue: '首页',
    dictEnValue: 'Home'
  }, {
    dictType: 'link',
    dictLabel: 'detailLink',
    dictZhValue: '详情',
    dictEnValue: 'Detail'
  }, {
    dictType: 'home',
    dictLabel: 'username',
    dictZhValue: '姓名',
    dictEnValue: 'username'
  }, {
    dictType: 'home',
    dictLabel: 'password',
    dictZhValue: '密码',
    dictEnValue: 'password'
  }, {
    dictType: 'home',
    dictLabel: 'email',
    dictZhValue: '邮箱',
    dictEnValue: 'email'
  }, {
    dictType: 'detail',
    dictLabel: 'desc',
    dictZhValue: '这是详情页',
    dictEnValue: 'This is a detail page'
  }]
}

const geti18nData = () => {
  const res = i18nData()
  const zh = {} // 存储中文
  const en = {} // 存储英文
  for (const item of res) {
    if (!zh[item.dictType]) {
      zh[item.dictType] = {}
      en[item.dictType] = {}
    }
    zh[item.dictType][item.dictLabel] = item.dictZhValue // 中文
    en[item.dictType][item.dictLabel] = item.dictEnValue // 英文
  }
  return {
    zh,
    en
  }
}

const initVuei18n = () => {
  console.log(geti18nData(), 'geti18nData()')
  const { zh, en } = geti18nData()
  return new Vuei18n({
    locale: 'zh-CN', // 默认为中文
    messages: {
      'zh-CN': zh,
      'en-US': en
    }
  })
}

const i18n = initVuei18n()
export default i18n
