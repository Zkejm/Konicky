<template>
  <header class="app-header" :style="{ backgroundColor: headerColor }">
    <button v-if="!isHome" class="back-button" @click="goBack">
      ←
    </button>
    <h1>{{ category?.name || 'Koničky' }}</h1>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const category = ref(null)
const headerColor = ref('#FFECD1')

const isHome = ref(route.path === '/')

async function fetchCategory() {
  const res = await fetch('/data.json')
  const json = await res.json()
  if (route.params.id) {
    const cat = json.categories.find(c => c.id === +route.params.id || c.id === +route.params.categoryId)
    category.value = cat
    headerColor.value = cat?.color || '#FFECD1'
  } else {
    category.value = null
    headerColor.value = '#FFECD1'
  }
}

function goBack() {
  router.back()
}

onMounted(fetchCategory)
watch(() => route.fullPath, () => {
  isHome.value = route.path === '/'
  fetchCategory()
})
</script>

<style scoped>
.app-header {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
}
.back-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
