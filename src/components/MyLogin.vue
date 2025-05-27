<template>
  <div class="login-container">
    <div class="login-box">
      <h2>用户登录</h2>
      <div class="form-group">
        <label>用户名:</label>
        <input type="text" v-model="username" placeholder="请输入用户名" />
      </div>
      <div class="form-group">
        <label>密码:</label>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </div>
      <button @click="login">登录</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      // 简单验证，实际项目中应与后端 API 交互
      if (!this.username || !this.password) {
        this.errorMessage = '用户名和密码不能为空'
            
        return
      }
      
      // 模拟登录成功（实际项目中应发送请求到后端）
      setTimeout(() => {
        // 这里可以添加实际的登录逻辑，如发送 AJAX 请求
        this.$emit('login') // 通知父组件登录成功
        this.username = ''
        this.password = ''
      }, 500)
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('../assets/登录背景图.jpg'); 
  background-size: cover; /* 让背景图片覆盖整个容器，可按需调整 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 背景图片居中显示 */
}

.login-box {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 95%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #35495e;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>