# webpack_demo

前端打包工具 webpack 基础配置

webpack版本：5.x

新的loader：asset/resource
{
  test: /\.(jpg|png|gif)$/,
  type: 'asset/resource',
  generator: {
    filename: 'static/[name][ext]'
  }
}
webpack5.x之前通常使用：
raw-loader 将文件导入为字符串
url-loader 将文件作为 data URI 内联到 bundle 中
file-loader 将文件发送到输出目录

资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：
asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。