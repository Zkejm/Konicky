<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const category = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();
    category.value = data.categories.find((c) => c.id == route.params.id);
  } catch (error) {
    console.error("Error loading category data:", error);
  }
});
</script>

<template>
  <div v-if="category">
    <h1>{{ category.name }}</h1>
    <ul>
      <li v-for="subcategory in category.subcategories" :key="subcategory.id">
        <router-link :to="`/subcategories/${subcategory.id}`">{{ subcategory.name }}</router-link>
      </li>
    </ul>
  </div>
  <p v-else>Loading...</p>
</template>