import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引用 svg 图标组件
import './svg-icons'

// 公共样式
import './assets/css/cube.css';
import './assets/css/page.css';
import * as api from './api/index'

// 引用富文本编辑组件
import common from './element/Editor/index'
common.map(item => {
  Vue.component(item.name, item)
})

Vue.use(ElementUI)

Vue.prototype.$api = api    // 数据请求方法
Vue.config.productionTip = false


Vue.prototype.$baseUrl = 'http://localhost:4003'    // 数据请求方法

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
