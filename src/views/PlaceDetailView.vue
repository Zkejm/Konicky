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
    <p><strong>Mesto: </strong>{{ place.city }}</p>
    <p><strong>Adresa: </strong>{{ place.address }}</p>
    <p><strong>Klub: </strong>{{ place.club }}</p>
    <p v-if="place.web"><strong>Webstránka:</strong><a :href="place.web" target="_blank" rel="noopener noreferrer">{{ place.web }}</a></p>
    <p><strong>Kontakt: </strong>{{ place.contact }}</p>
    <div class="map-container" v-if="place.mapa" v-html="place.mapa"></div>
  </div>
  <p v-else>Loading...</p>
</template>