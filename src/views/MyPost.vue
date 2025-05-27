<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <div class="meta">
      <span class="date">{{ formatDate(post.date) }}</span>
      <span class="author" v-if="post.author">by {{ post.author }}</span>
    </div>
    <div class="content" v-html="post.content"></div>
    <router-link to="/" class="back-link">← Back to Home</router-link>
  </div>
</template>

<script>
export default {

  props: ['id'],
  data() {
    return {
      post: {}
    }
  },
  created() {
    this.fetchPost(this.id)
  },
  methods: {
    fetchPost(id) {
      // In a real app, this would be an API call
      const allPosts = [
        {
          id: 1,
          title: 'Getting Started with Vue 3',
          content: `
            <p>Vue 3 introduces the Composition API, a new way to organize and reuse code in Vue components.</p>
            <p>The Composition API is optional and can be used alongside the Options API.</p>
            <h2>Key Features</h2>
            <ul>
              <li>Better TypeScript support</li>
              <li>Improved performance</li>
              <li>Smaller bundle size</li>
            </ul>
          `,
          date: '2023-05-15',
          author: 'Jane Doe'
        },
        {
          id: 2,
          title: 'Vue Router Explained',
          content: `
            <p>Vue Router is the official router for Vue.js.</p>
            <p>It deeply integrates with Vue.js core to make building Single Page Applications easy.</p>
            <h2>Key Features</h2>
            <ul>
              <li>Nested route/view mapping</li>
              <li>Modular, component-based router configuration</li>
              <li>Route params, query, wildcards</li>
            </ul>
          `,
          date: '2023-06-20',
          author: 'John Smith'
        },
        {
          id: 3,
          title: 'State Management with Pinia',
          content: `
            <p>Pinia is the recommended state management library for Vue.</p>
            <p>It works with both Vue 2 and Vue 3 and provides a simpler API than Vuex.</p>
            <h2>Why Pinia?</h2>
            <ul>
              <li>Devtools support</li>
              <li>Hot module replacement</li>
              <li>TypeScript support</li>
              <li>No mutations, only actions</li>
            </ul>
          `,
          date: '2023-07-10',
          author: 'Jane Doe'
        }
      ]
      
      this.post = allPosts.find(post => post.id === Number(id)) || {}
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }
  }
}
</script>

<style scoped>
.post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.post h1 {
  margin-bottom: 1rem;
}

.meta {
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.meta .date:after {
  content: "•";
  margin: 0 0.5rem;
}

.content {
  line-height: 1.6;
  margin-bottom: 2rem;
}

.content >>> h2 {
  margin: 1.5rem 0 1rem;
  color: #2c3e50;
}

.content >>> ul {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.content >>> li {
  margin-bottom: 0.5rem;
}

.back-link {
  display: inline-block;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}
</style>