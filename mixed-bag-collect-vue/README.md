<!--
 * @Date: 2022-12-13 13:30:36
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-19 22:15:30
 * @Description: 这是****文件
-->
# mixed-bag-collect-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 安装ant-design-vue
直接使用npm i --save ant-design-vue 会安装最新的版本 适用于vue3.x项目
我们现在是用vue2.x,需要安装指定的ant design vue 版本号
```
npm i ant-design-vue@1.7.8
```

### 实现复杂表格的渲染
tableView


### 实现切换页面的过渡效果
transitionView
是使用transion动画
考虑返回的监听
可以在路由元信息那设置每个路由的层级
如果从小 -> 大的 则是左滑  如果是从大的 -> 小的 则是右滑
但是不好维护～ 
自己记录一套路由栈, 在push的时候推入一个路径，如果历史路由栈中存在相同的路径，则是返回的切换效果


### 使用vue-i18n实现项目的双语国际化
下载vue-i18n 插件 记得vue2要下载8版本
```
npm install vue-i18n@8.9.0
```
思考的问题：
1、如何使用vue-i18n ？

2、翻译的字段数据存放在哪里合适 ？

3、ant-design-vue如何国际化 ？

4、如何全局监听切换了语言 ？

5、语言的不同如何兼容样式 ？

### 使用canvas和监听鼠标事件实现电子签名功能
思考的问题：
1、如何使用canvas画线 ？

2、如何判断在提交签名时判断是否有签名 ？

3、如何将canvas 转成的base64转成File文件对象传给后端 ？


### 实现二次封装a-button按钮
是使用了渲染函数配置jsx书写了一个button组件，获取实例上的$attrs和$listeners来获得父作用域中传来的属性和事件，
判断传来的type如果是none则返回一个普通的盒子否责返回antdesignvue的按钮，在返回标签的时候也需要把属性和事件传递传递出去，
在传递事件时，则传递了通过lodash引入的防抖函数处理过的事件
