<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const place = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();

    for (let category of data.categories) {
      for (let sub of category.subcategories) {
        for (let p of sub.places) {
          if (p.id == route.params.id) {
            place.value = p;
          }
        }
      }
    }
  } catch (error) {
    console.error("Error loading place data:", error);
  }
});
</script>

<template>
  <div v-if="place">
    <h1>{{ place.name }}</h1>
    <p><strong>Mesto:</strong> {{ place.city }}</p>
    <p><strong>Adresa:</strong> {{ place.address }}</p>
  </div>
  <p v-else>Loading...</p>
</template>