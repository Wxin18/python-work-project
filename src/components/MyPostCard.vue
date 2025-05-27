<template>
  <article class="post-card">
    <h2>{{ post.title }}</h2>
    <p class="meta">
      <span class="date">{{ formatDate(post.date) }}</span>
      <span class="author" v-if="post.author">by {{ post.author }}</span>
    </p>
    <p class="excerpt">{{ post.excerpt }}</p>
    <router-link :to="{ name: 'Post', params: { id: post.id } }" class="read-more">
      Read More
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }
  }
}
</script>

<style scoped>
.post-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.post-card h2 {
  margin-top: 0;
  color: #2c3e50;
}

.meta {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.meta .date:after {
  content: "•";
  margin: 0 0.5rem;
}

.excerpt {
  margin: 1rem 0;
  line-height: 1.6;
}

.read-more {
  display: inline-block;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}
</style>