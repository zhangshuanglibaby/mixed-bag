/*
 * @Date: 2022-12-13 13:30:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-13 14:56:26
 * @Description: 这是****文件
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: 'css'
      }
    ]
  ]
}
