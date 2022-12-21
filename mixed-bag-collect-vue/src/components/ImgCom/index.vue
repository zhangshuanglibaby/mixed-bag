<!--
 * @Date: 2022-12-21 15:16:22
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-21 21:04:54
 * @Description: 这是****文件
-->
<template>
  <div class="img-container"
    ref="imgContainer"
    :style="{ width: width, height: height}">
    <img class="img-style"
      :src="imgSrc"
      :style="{ objectFit: fit }"
      v-if="!loading">
    <template v-if="loading">
      <slot name="loading">
        <div class="img-status">
          <img class="img-loading" src="../../assets/imgCom/img-loading.png">
        </div>
      </slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ImgCom',
  props: {
    // 图片宽度
    width: {
      type: String,
      default: '100%'
    },
    // 图片高度
    height: {
      type: String,
      default: '100%'
    },
    // 图片地址
    src: String,
    // 缩放百分比
    resize: {
      type: Array,
      default: () => [10, 50, 100]
    },
    fit: {
      type: String,
      default: 'contain'
    },
    // 是否使用整数高度
    intSize: {
      type: Boolean,
      default: false
    },
    // 是否使用懒加载
    useLazy: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      imgSrc: '',
      loading: false
    }
  },
  watch: {
    src: {
      handler () {
        this.loadImg()
      },
      immediate: true
    }
  },
  methods: {
    /**
     * 初始化图片下载
     */
    loadImg () {
      if (!this.src) {
        this.loading = true
        return
      }
      this.imgSrc = this.src
      if (this.useLazy) {
        this.load(this.imgSrc)
      }
    },

    /**
     * 图片加载处理
     */
    async load (src) {
      this.loading = true
      for (let i = 0; i < this.resize.length; i++) {
        const address = await this.imgResize(this.resize[i])
        const imgSrc = src + address
        await this.preload(imgSrc)
        this.loading = false
      }
    },

    /**
     * 图片等比缩放
     * @param {*} ratio/缩放比例
     */
    imgResize (ratio) {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          if (ratio === 100) {
            resolve('')
          }
          let height = 0
          if (this.$refs.imgContainer) {
            height = this.$refs.imgContainer.offsetHeight
          }
          height = Math.ceil((height * ratio) / 100) || 10
          console.log(height, 'heightheight')
          resolve(`?x-oss-process=image/resize,h_${height},m_lfit`)
        })
      })
    },

    /**
     * 图片预加载
     */
    preload (src) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          this.imgSrc = src
          resolve()
        }
        img.onerror = () => {
          // 如果无法加载oss参数，则使用原地址加载图片
          const originSrc = this.src
          const originImg = new Image()
          originImg.onload = () => {
            /* eslint-disable */
            reject(500)
          }
          originImg.onerror = () => {
            /* eslint-disable */
            reject('地址错误:' + originSrc)
          }
          // 放弃参数使用原来的地址
          originImg.src = this.src
        }
        console.log(src, 'srcserc')
        img.src = src
      })
    }
  }
}
</script>

<style lang="less" scoped>
.img-container {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.img-style {
  display: block;
  width: 100%;
  height: 100%;
}
.img-status {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  .img-loading {
    width: 10%;
    // min-width: 12px;
    object-fit: contain;
    animation: rotate 2s linear infinite;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
