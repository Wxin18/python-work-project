<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="logo">我的博客</router-link>
      <div class="links">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我</router-link>
        <router-link to="/contact">联系我们</router-link>
        <router-link to="/msg-board">留言板</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.header {

  
  background-color: #352f2f;
  color: white;
  padding: 1rem 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.links a {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}

.links a.router-link-exact-active {
  color: #42b983;
}
</style>