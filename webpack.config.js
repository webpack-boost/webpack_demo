const path = require('path')

module.exports = {
  // 代码打包后的地址
  output: {
    path: path.resolve(__dirname, 'dist'), // 指定的打包目录，必须为绝对路径
    filename: 'bundle.js' // 打包后的文件名
    // clean: true // 清除上一次打包名称
  },
  /**
   * webpack默认只会处理js文件，如果需要处理其他类型文件，则需要使用loader
   * loader执行顺序是从后往前执行
   */
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配以css结尾的文件
        use: ['style-loader', 'css-loader'] // css-loader只负责处理css，并不会关心样式是否生效，style-loader负责让样式生效
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]'
        }
      }
    ]
  }
}
