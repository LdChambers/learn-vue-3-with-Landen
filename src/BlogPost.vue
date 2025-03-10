<template>
    <div class="blog-post">
      <p>
        {{ message }}
      </p>
      <!-- Display the id, title, and content of a blog post. -->
      <h2>{{ id }} - {{ blogPostTitle }}</h2>
      <div>
        Modify the Title: 
        <input type="text" v-model="blogPostTitle" />
      </div>
      <h4>{{ blogPostContent }}</h4>
      <div>
        Modify the Content: 
        <input type="text" v-model="blogPostContent" />
      </div>
      <button @click="$emit('Delete-blog-post', id)">Delete Post</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  let message = ref('This is the BlogPost component.')
  const props = defineProps(['id'])
  defineEmits(['delete-blog-post'])

  let blogPostContent = defineModel('blogPostContent')
  let blogPostTitle = defineModel('blogPostTitle')
  </script>
  
  <style scoped>
  .blog-post {
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
  }
  </style>