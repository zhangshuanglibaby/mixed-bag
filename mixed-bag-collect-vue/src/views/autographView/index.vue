<!--
 * @Date: 2022-12-15 16:04:01
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-19 20:23:49
 * @Description: 这是****文件
-->
<template>
  <div class="autographView">
    <div class="header">
      <span style="margin-right:20px">电子签名</span>
      <a-icon type="edit" />
    </div>
    <div class="autograph_container" ref="autographContainer">
      <canvas ref="canvasRef"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"></canvas>
    </div>
    <div class="autograph_btn">
      <div style="margin-right: 30px;">
        <a-button class="confirm-btn" icon="check" block @click="handleCommit">确定</a-button>
      </div>
      <div>
        <a-button class="close-btn" icon="close" block @click="handleClear">清除</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'autographView',
  data () {
    return {
      ctx: null, // 存储canvas
      isPrint: false,
      strokeStyle: '#000', // 线条颜色
      lineWidth: 2, // 线条粗细
      startX: 0, // 记录起始x轴位置
      startY: 0, // 记录起始Y轴位置
      points: [] // 记录坐标 用来判断是否有签名的
    }
  },
  mounted () {
    this.initCanvas()
  },
  methods: {
    initCanvas () {
      // 获取父元素的宽高
      const { width, height } = this.$refs.autographContainer.getBoundingClientRect()
      const canvas = this.$refs.canvasRef
      canvas.width = width // 设置canvas的宽
      canvas.height = height // 设置canvas的高
      // 获取2d画布上的上下文，所有的图形绘制都可以通过ctx的属性和方法来完成
      this.ctx = canvas.getContext('2d')
    },
    // 监听鼠标按下事件
    mousedown (event) {
      event.preventDefault()
      // 获取鼠标按下的基于offsetParent的位置
      this.startX = event.offsetX
      this.startY = event.offsetY
      this.isPrint = true // 开启绘画状态
    },
    // 监听鼠标移动
    mousemove (event) {
      // console.log(e, 'ee')
      event.preventDefault()
      // 要判断是否是开启了绘画状态
      if (!this.isPrint) return
      const obj = {
        x: event.offsetX,
        y: event.offsetY
      }
      // 设置线条颜色
      this.ctx.strokeStyle = this.strokeStyle
      // 设置线条宽度
      this.ctx.lineWidth = this.lineWidth
      // 开始描绘路径
      this.ctx.beginPath()
      // 将鼠标按下时记录的起始坐标移至直线起点
      this.ctx.moveTo(this.startX, this.startY)
      // 定义线条结束坐标
      this.ctx.lineTo(obj.x, obj.y)
      // 绘制图形的线条
      this.ctx.stroke()
      // 闭合绘图路径
      this.ctx.closePath()
      // 更新起始位置
      this.startX = obj.x
      this.startY = obj.y
      // 记录坐标
      this.points.push(obj)
    },
    // 监听鼠标松开事件
    mouseup () {
      // 更改绘画状态
      this.isPrint = false
    },
    // 清除
    handleClear () {
      // clearRect() 方法清空给定矩形内的指定像素
      const { width, height } = this.$refs.canvasRef
      this.ctx.clearRect(0, 0, width, height)
      // 清空坐标
      this.points = []
    },
    // 提交
    handleCommit () {
      // 判断至少有20个坐标 才算有签名
      if (this.points.length < 20) {
        this.$message.error('签名不能为空!')
        return
      }
      // 转成base64
      const baseFile = this.$refs.canvasRef.toDataURL() // 默认转成png格式的图片编码
      const filename = Date.now() // 用时间戳做文件名吧
      const file = this.dataURLToFile(baseFile, filename) // 图片文件形式 传给后端存储即可
      console.log('====>', file)
    },
    // 将base64转成File文件对象
    dataURLToFile (dataURL, filename) {
      console.log(dataURL.split(','))
      const arr = dataURL.split(',')
      // 获取图片格式
      const imgType = arr[0].match(/:(.*?);/)[1]
      console.log(imgType, 'imgType')
      // atob() 方法用于解码使用 base-64 编码的字符串
      const dec = atob(arr[1])
      let n = dec.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        // 转成ASCII码
        u8arr[n] = dec.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: imgType })
    }
  }
}
</script>

<style lang="less" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.autographView {
  display: flex;
  width: 100%;
  height: 100vh;
  .flex-center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  .header {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background: rgb(7, 53, 96);
    color: white;
    font-size: 36px;
    .flex-center;
  }
  .autograph_container {
    width: 100%;
    flex: 1;
    border: 1px solid rgb(7, 53, 96);
  }
  .autograph_btn {
    padding: 20px;
    .flex-center;
    >div {
      width: 150px;
    }
    .confirm-btn {
      background: rgb(7, 53, 96);
      border-color: rgb(7, 53, 96);
      color: #fff;
    }
  }
}
</style>
