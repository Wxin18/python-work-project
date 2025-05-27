<template>
  <div class="home">
    <div class="container">
      <!-- 左侧个人信息栏 -->
      <aside class="sidebar">
        <div class="profile-card">
          <img 
            src="/" 
            alt="个人头像" 
            class="avatar"
          />
          <h2 class="name">Jane Doe</h2>
          <p class="title">Vue.js 开发者 & 技术博主</p>
          <p class="bio">
            专注于前端开发技术分享，擅长 Vue 生态体系开发，累计发表技术文章50+篇，阅读量超10万次。
          </p>
          <div class="social-links">
            <a href="#github" class="social-link">GitHub</a>
            <a href="#twitter" class="social-link">Twitter</a>
            <a href="#linkedin" class="social-link">LinkedIn</a>
          </div>
        </div>

        <!-- 文章分类筛选 -->
        <div class="category-filter">
          <h3>分类筛选</h3>
          <ul>
            <li 
              :class="{ active: !selectedCategory }" 
              @click="selectedCategory = ''"
            >
              全部
            </li>
            <li 
              v-for="category in categories" 
              :key="category" 
              :class="{ active: selectedCategory === category }" 
              @click="selectedCategory = category"
            >
              {{ category }}
            </li>
          </ul>
        </div>
      </aside>

      <!-- 右侧文章主内容区 -->
      <main class="main-content">
        <h1 class="page-title">欢迎来到我的技术博客</h1>
        
        <!-- 搜索框 -->
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search posts..."
          class="search-input"
        />

        <div class="posts-grid">
          <PostCard 
            v-for="post in displayPosts" 
            :key="post.id" 
            :post="post" 
            class="post-card"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import MyPostCard from '../components/MyPostCard.vue'

export default {
  components: {
    PostCard: MyPostCard
  },
  data() {
    return {
      // 个人信息
      profile: {
        avatar: 'https://example.com/avatar.jpg',
        name: 'Jane Doe',
        title: 'Vue.js 开发者 & 技术博主',
        bio: '专注于前端开发技术分享，擅长 Vue 生态体系开发，累计发表技术文章50+篇，阅读量超10万次。',
        socialLinks: {
          github: 'https://github.com/janedoe',
          twitter: 'https://twitter.com/janedoe',
          linkedin: 'https://linkedin.com/in/janedoe'
        }
      },
      
      // 文章数据（新增分类字段）
      posts: [
        {
          id: 1,
          title: 'Getting Started with Vue 3',
          excerpt: 'Learn how to build applications with Vue 3 and the Composition API.',
          date: '2023-05-15',
          author: 'Jane Doe',
          category: 'Vue基础'
        },
        {
          id: 2,
          title: 'Vue Router Explained',
          excerpt: 'A deep dive into Vue Router and its features.',
          date: '2023-06-20',
          author: 'John Smith',
          category: '路由管理'
        },
        {
          id: 3,
          title: 'State Management with Pinia',
          excerpt: 'Why Pinia is the recommended state management solution for Vue 3.',
          date: '2023-07-10',
          author: 'Jane Doe',
          category: '状态管理'
        },
        {
          id: 4,
          title: 'Vue 3 Composition API Best Practices',
          excerpt: 'Practical tips for using the Composition API effectively.',
          date: '2023-08-01',
          author: 'Jane Doe',
          category: 'Vue进阶'
        }
      ],
      
      // 搜索相关
      searchQuery: '',
      selectedCategory: '',
      
      // 分类列表（自动去重生成）
      categories: []
    }
  },
  computed: {
    // 计算分类列表
    uniqueCategories() {
      return [...new Set(this.posts.map(post => post.category))].sort();
    },

    // 最终显示的文章列表（搜索 + 分类双重过滤）
    displayPosts() {
      let filtered = this.posts.filter(post => {
        // 分类过滤
        if (this.selectedCategory && post.category !== this.selectedCategory) return false;
        
        // 搜索过滤（标题/摘要/作者）
        const query = this.searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query)
        );
      });

      // 按日期倒序排列
      return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  },
  watch: {
    // 监听文章数据变化，更新分类列表
    posts() {
      this.categories = this.uniqueCategories;
    }
  },
  mounted() {
    // 初始化分类列表
    this.categories = this.uniqueCategories;
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 3fr; /* 左侧1份，右侧3份布局 */
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* 左侧边栏样式 */
.sidebar {
  position: sticky;
  top: 2rem;
  min-width: 280px;
}

.profile-card {
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
  text-align: center;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 4px solid #fff;
  box-shadow: 0 0 0 4px #f0f4f8;
}

.name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a73e8;
}

.title {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.bio {
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  color: #1a73e8;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.social-link:hover {
  color: #0d47a1;
}

.category-filter {
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.category-filter h3 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.category-filter ul {
  list-style: none;
  padding: 0;
}

.category-filter li {
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.3s;
}

.category-filter li.active {
  color: #1a73e8;
  font-weight: 500;
}

.category-filter li:not(.active):hover {
  color: #444;
}

/* 右侧主内容区样式 */
.main-content {
  flex: 1;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #1a73e8;
  border-bottom: 2px solid #f0f4f8;
  padding-bottom: 0.8rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .container {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    min-width: auto;
  }
}

/* 其他样式继承原有代码，可保持不变 */
.search-input {
  /* 原有样式 */
  width: 50%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 15px;
}

/* 卡片组件样式建议在PostCard组件中单独定义 */
</style>