<template>
  <div class="subcategory-list">
    <div
      v-for="sub in subcategories"
      :key="sub.id"
      class="category-button"
      :style="{ backgroundColor: color }"
      @click="goToDetail(sub.id)"
    >
      {{ sub.name }}
    </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router'

const props = defineProps(['subcategories', 'categoryId', 'color'])
const router = useRouter()

function goToDetail(subId) {
  router.push(`/category/${props.categoryId}/${subId}`)
}
</script>


<style scoped>
.subcategory-list {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
}

.category-button {
  padding: 2rem;
  border-radius: 12px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-button:hover {
  transform: scale(1.02);
}
</style>
