<template>
    <div class="blog-post">
      <p>
        {{ message }}
      </p>
      <!-- Display the id, title, and content of a blog post. -->
      <h2>{{ id }} - {{ blogPostTitle }}</h2>
      <h4>{{ blogPostContent }}</h4>
      <button @click="$emit('Delete-blog-post', id)">Delete Post</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  let message = ref('This is the BlogPost component.')
  const props = defineProps(['id', 'blogPostTitle', 'blogPostContent'])
  defineEmits(['delete-blog-post'])
  </script>
  
  <style scoped>
  .blog-post {
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>