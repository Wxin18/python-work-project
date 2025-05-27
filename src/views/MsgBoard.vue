<template>
  <div class="msg-board-container">
    <h1 class="page-title">留言板</h1>
    
    <div class="message-form">
      <h2>发表留言</h2>
      <form @submit.prevent="submitMessage">
        <div class="form-group">
          <label for="username">昵称:</label>
          <input type="text" id="username" v-model="messageData.username" required>
        </div>
        
        <div class="form-group">
          <label for="content">留言内容:</label>
          <textarea id="content" v-model="messageData.content" rows="4" required></textarea>
        </div>
        
        <button type="submit" :disabled="submitting">
          {{ submitting ? '发布中...' : '发布留言' }}
        </button>
      </form>
    </div>
    
    <div class="message-list">
      <h2>最新留言</h2>
      
      <div v-if="messages.length === 0" class="empty-message">
        暂无留言，快来发表第一条留言吧！
      </div>
      
      <div v-for="(message, index) in messages" :key="index" class="message-item">
        <div class="message-header">
          <span class="username">{{ message.username }}</span>
          <span class="time">{{ formatTime(message.time) }}</span>
        </div>
        <div class="message-content">{{ message.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageData: {
        username: '',
        content: ''
      },
      messages: [
        {
          username: '张三',
          content: '这个博客非常棒！内容很有深度，期待更多更新！',
          time: new Date().getTime() - 86400000 // 1天前
        },
        {
          username: '李四',
          content: '请问如何申请成为博主？有什么要求吗？',
          time: new Date().getTime() - 43200000 // 12小时前
        }
      ],
      submitting: false
    }
  },
  methods: {
    formatTime(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
    async submitMessage() {
      if (!this.messageData.username.trim() || !this.messageData.content.trim()) {
        return;
      }
      
      this.submitting = true;
      
      try {
        // 模拟API请求
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 添加新留言
        this.messages.unshift({
          ...this.messageData,
          time: new Date().getTime()
        });
        
        // 清空表单
        this.messageData = {
          username: '',
          content: ''
        };
        
        // 显示成功提示（实际项目中可使用Toast组件）
        console.log('留言发布成功！');
      } catch (error) {
        console.error('留言发布失败:', error);
      } finally {
        this.submitting = false;
      }
    }
  }
}
</script>

<style scoped>
.msg-board-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
}

.message-form,
.message-list {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.message-form h2,
.message-list h2 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
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

.message-item {
  padding: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.username {
  font-weight: bold;
  color: #333;
}

.time {
  font-size: 0.875rem;
  color: #888;
}

.message-content {
  line-height: 1.5;
  color: #555;
}

.empty-message {
  text-align: center;
  padding: 2rem;
  color: #888;
}
</style>