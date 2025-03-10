<template>
  <h1>Message: {{ message }}</h1>
  <div style="background-color: orange; padding-left: 10px;">
    <ComponentA />
  </div>
</template>

<script setup>
import { ref, provide, onUpdated, readonly } from 'vue'
import ComponentA from './ComponentA.vue';

let message = ref('Hello, Provide/inject!')

function updateMessage() {
  message.value = 'Hello, Provide/inject! Updated!'

}

let count = ref(0)
provide('read-only-count', readonly(count))

provide('msg', {message, updateMessage})
</script>

<style scoped></style>