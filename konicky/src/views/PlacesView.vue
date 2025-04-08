<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const subcategory = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();

    for (let category of data.categories) {
      for (let sub of category.subcategories) {
        if (sub.id == route.params.id) {
          subcategory.value = sub;
        }
      }
    }
  } catch (error) {
    console.error("Error loading subcategory data:", error);
  }
});
</script>

<template>
  <div v-if="subcategory">
    <h1>{{ subcategory.name }}</h1>
    <p><strong>Opis športu:</strong> {{ subcategory.description }}</p>
    <ul>
      <li v-for="place in subcategory.places" :key="place.id">
        <router-link :to="`/places/${place.id}`">{{ place.name }} - {{ place.city }}</router-link>
      </li>
    </ul>
  </div>
  <p v-else>Loading...</p>
</template>