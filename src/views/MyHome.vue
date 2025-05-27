<template>
  <div class="home">
    <h1>Welcome to My Blog</h1>
    <!-- 添加搜索框 -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search posts..."
      class="search-input"
    />
    <div class="posts">
      <PostCard 
        v-for="post in filteredPosts" 
        :key="post.id" 
        :post="post" 
      />
    </div>
  </div>
</template>

<script>
import MyPostCard from '../components/MyPostCard.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MyPostCard
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Getting Started with Vue 3',
          excerpt: 'Learn how to build applications with Vue 3 and the Composition API.',
          date: '2023-05-15',
          author: 'Jane Doe'
        },
        {
          id: 2,
          title: 'Vue Router Explained',
          excerpt: 'A deep dive into Vue Router and its features.',
          date: '2023-06-20',
          author: 'John Smith'
        },
        {
          id: 3,
          title: 'State Management with Pinia',
          excerpt: 'Why Pinia is the recommended state management solution for Vue 3.',
          date: '2023-07-10',
          author: 'Jane Doe'
        }
      ],
      // 新增搜索关键词数据属性
      searchQuery: ''
    }
  },
  // 新增计算属性，用于过滤文章
  computed: {
    filteredPosts() {
      if (!this.searchQuery) {
        return this.posts;
      }
      const query = this.searchQuery.toLowerCase();
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query);
      });
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem 0;
}

.home h1 {
  margin-bottom: 2rem;
}

.posts {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* 添加搜索框样式 */
.search-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

@media (min-width: 768px) {
  .posts {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .posts {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>