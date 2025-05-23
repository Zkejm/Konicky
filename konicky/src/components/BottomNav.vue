<template>
    <nav class="bottom-nav" :style="{ backgroundColor: currentColor }">
      <button @click="goHome">🏠</button>
      <button @click="goCategory(1)">⚡</button>
      <button @click="goCategory(2)">🎨</button>
      <button @click="goCategory(3)">🎵</button>
      <button @click="goCategory(4)">🧠</button>
      <button @click="goCategory(5)">🌍</button>
      <button @click="goCategory(6)">…</button>
    </nav>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  const currentColor = ref('#eee')
  
  watchEffect(async () => {
    const id = route.params.id || route.params.categoryId
    if (id) {
      const res = await fetch('/data.json')
      const json = await res.json()
      const category = json.categories.find(c => c.id === +id)
      currentColor.value = category?.color || '#eee'
    } else {
      currentColor.value = '#eee'
    }
  })
  
  function goHome() {
    router.push('/')
  }
  function goCategory(id) {
    router.push(`/category/${id}`)
  }
  </script>
  
  <style scoped>
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    border-top: 1px solid #ccc;
  }
  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
  }
  </style>
  