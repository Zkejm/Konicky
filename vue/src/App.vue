<script setup>
import Homepage from './components/Home.vue'
</script>

<template>
  <main>
    <Homepage />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 320px) {
  header {
    display: flex;
    position: top;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>