<template>
  <div id="app">
    <!-- 使用 v-if 控制是否显示登录组件 -->
    <MyLogin v-if="!isLoggedIn" @login="handleLogin" />
    
    <!-- 只有登录成功后才显示主内容 -->
    <div v-else>
      <MyHeader />
      <main class="container">
        <router-view />
      </main>
      <MyFooter />
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyLogin from './components/MyLogin.vue'

export default {
  components: {
    MyHeader,
    MyFooter,
    MyLogin
  },
  data() {
    return {
      isLoggedIn: false // 初始状态为未登录
    }
  },
  methods: {
    handleLogin() {
      // 处理登录成功事件
      this.isLoggedIn = true
      
      // 可以在这里添加登录成功后的逻辑，如保存 token 等
      // localStorage.setItem('token', response.token)
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  flex: 1;
}
</style>  