/*
 * @Date: 2022-12-22 00:11:52
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-22 23:56:00
 * @Description: 这是****文件
 */
/**
 * 实现图片懒加载
 */

// 创建观察者
const createObserver = (el) => {
  const options = {
    threshold: 0.9 // 目标元素出现在可视窗口的80% 才触发
  }
  const io = new IntersectionObserver((entries, observer) => {
    // entries是一个数组
    entries.forEach(entry => {
      // isIntersecting属性可以判断元素是否在可视区域内
      const { target, isIntersecting } = entry
      if (!isIntersecting) return
      // 开始下载图片
      target.src = el.dataset.src
      target.classList.add('active')
      // 加载完后停止观察
      observer.unobserve(el)
    })
  }, options)
  io.observe(el)
}

export default {
  inserted (el) {
    createObserver(el)
  }
}
