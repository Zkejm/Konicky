<template>
  <div class="category-list">
    <router-link
      v-for="category in categories"
      :key="category.id"
      :to="`/category/${category.id}`"
      class="category-button"
      :style="{ backgroundColor: category.color }"
    >
      {{ category.name }}
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const categories = ref([])

onMounted(async () => {
  const res = await fetch('/data.json')
  const json = await res.json()
  categories.value = json.categories
})
</script>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2.15rem;
  height: 150%;
}

.category-button {
  padding: 1rem;
  border-radius: 12px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
