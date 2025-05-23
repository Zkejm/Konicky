<template>
  <div style="border: 1px solid #ccc; padding: 1rem; margin: 1rem;">
    <h3>{{ place.name }}</h3>
    <p><strong>Mesto:</strong> {{ place.city }}</p>
    <p><strong>Adresa:</strong> {{ place.address }}</p>
    <p><strong>Kontakt:</strong> {{ place.contact }}</p>
    <p><a :href="place.web" target="_blank">Web</a></p>
    <div v-html="place.mapa"></div>
  </div>
</template>

<script setup>
defineProps(['place'])
</script>
