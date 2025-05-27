// main.js（Vue 2 正确写法）
import Vue from 'vue'
import App from './App.vue'
import router from './router'  // 导入路由实例
import './assets/main.css'

Vue.config.productionTip = false

// 使用 new Vue() 创建实例
new Vue({
  router,  // 注入路由
  render: h => h(App),
}).$mount('#app')