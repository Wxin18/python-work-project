<template>
  <div class="contact-container">
    <h1 class="page-title">联系我们</h1>
    
    <div class="contact-content">
      <div class="contact-info">
        <h2>联系方式</h2>
        <ul>
          <li>
            <i class="fa fa-envelope"></i>
            <span>邮箱: contact@example.com</span>
          </li>
          <li>
            <i class="fa fa-phone"></i>
            <span>电话: +86 123 4567 8901</span>
          </li>
          <li>
            <i class="fa fa-map-marker"></i>
            <span>地址: 北京市海淀区中关村大街1号</span>
          </li>
        </ul>
        
        <h2>关注我们</h2>
        <div class="social-links">
          <a href="#" target="_blank"><i class="fa fa-weixin"></i></a>
          <a href="#" target="_blank"><i class="fa fa-weibo"></i></a>
          <a href="#" target="_blank"><i class="fa fa-github"></i></a>
        </div>
      </div>
      
      <div class="contact-form">
        <h2>留言咨询</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名:</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          
          <div class="form-group">
            <label for="email">邮箱:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          
          <div class="form-group">
            <label for="message">留言内容:</label>
            <textarea id="message" v-model="formData.message" rows="5" required></textarea>
          </div>
          
          <button type="submit" :disabled="submitting">
            {{ submitting ? '发送中...' : '发送消息' }}
          </button>
          
          <p v-if="submitSuccess" class="success-message">
            感谢您的留言，我们会尽快回复！
          </p>
          <p v-if="submitError" class="error-message">
            发送失败，请稍后重试！
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      submitting: false,
      submitSuccess: false,
      submitError: false
    }
  },
  methods: {
    async submitForm() {
      this.submitting = true;
      this.submitSuccess = false;
      this.submitError = false;
      
      try {
        // 模拟API请求
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // 清空表单
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
        
        this.submitSuccess = true;
      } catch (error) {
        this.submitError = true;
      } finally {
        this.submitting = false;
      }
    }
  }
}
</script>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.contact-info,
.contact-form {
  flex: 1;
  min-width: 300px;
}

.contact-info h2,
.contact-form h2 {
  margin-bottom: 1rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.contact-info i {
  margin-right: 1rem;
  color: #42b983;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-links a {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  color: #333;
  transition: background-color 0.3s;
}

.social-links a:hover {
  background-color: #42b983;
  color: white;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background-color: #35495e;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  color: #42b983;
  margin-top: 1rem;
}

.error-message {
  color: #e53935;
  margin-top: 1rem;
}
</style>