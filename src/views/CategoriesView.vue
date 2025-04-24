<script setup>
import { ref, onMounted } from "vue";

const categories = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();
    categories.value = data.categories;
  } catch (error) {
    console.error("Error loading data:", error);
  }
});
</script>

<template>
  <div>
    <h1>Koničky</h1>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <router-link :to="`/categories/${category.id}`">{{ category.name }}</router-link>
      </li>
    </ul>
  </div>
</template>