module.exports = {
  // 多入口文件打包方式：数组，将两个文件同时打包进main.js
  // entry: ['./src/module1.js', './src/module2.js'],
  // 多入口文件打包方式：对象，将两个文件分别打包进main.js
  entry: {
    module1: './src/module1.js',
    module2: './src/module2.js'
  },
  // 当通过多个入口起点(entry point)、代码拆分(code splitting)或各种插件(plugin)创建多个 bundle，应该使用以下一种替换方式，来赋予每个 bundle 一个唯一的名称
  output: {
    filename: '[name].[hash:4].bundle.js',
    clean: true
  }
}
