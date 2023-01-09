/**
 * 入口文件
 */
import './assets/css/index.css'

// 引入图片
import img from './assets/images/1.png'

document.body.insertAdjacentHTML('beforeend', '<h1>css-loader测试</h1>')

document.body.insertAdjacentHTML('beforeend', `<img src=${img} />`)
