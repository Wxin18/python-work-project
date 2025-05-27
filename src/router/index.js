// router/index.js（Vue Router 3 正确写法）
import Vue from 'vue'
import VueRouter from 'vue-router'  // 直接导入 VueRouter
import MyHome from '../views/MyHome.vue'
import MyAbout from '../views/MyAbout.vue'
import MyPost from '../views/MyPost.vue'
import MyContact from '../views/MyContact.vue'
import MsgBoard from '../views/MsgBoard.vue'

// 必须先安装插件（Vue 2 特性）
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MyHome
  },
  {
    path: '/about',
    name: 'About',
    component: MyAbout
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: MyPost,
    props: true
  },
  {
      path: '/contact',
      name: 'MyContact',
      component: MyContact
    },
    {
      path: '/msg-board',
      name: 'MsgBoard',
      component: MsgBoard
    }
]

// 创建路由实例（Vue Router 3 使用 VueRouter 构造函数）
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router