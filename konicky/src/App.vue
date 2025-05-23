<template>
  <div class="app-container">
    <AppHeader :category="currentCategory" />
    <router-view />
    <BottomNav />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import BottomNav from './components/BottomNav.vue'

const route = useRoute()
const currentCategory = ref(null)

watchEffect(async () => {
  const res = await fetch('/data.json')
  const json = await res.json()
  const catId = +route.params.id || +route.params.categoryId
  currentCategory.value = json.categories.find(c => c.id === catId) || null
})
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
router-view {
  flex: 1;
  overflow-y: auto;
}
</style>