<!--
 * @Date: 2022-12-13 13:30:36
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-14 20:37:58
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
