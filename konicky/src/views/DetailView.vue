<template>
  <div :style="{ backgroundColor: categoryColor }">
    <div v-if="subcategory">
      <h1>{{ subcategory.name }}</h1>
      <img :src="subcategory.picture" alt="Obrázok" width="100%" />
      <p v-html="subcategory.description"></p>

      <h2>Miesta</h2>
      <PlaceCard v-for="place in subcategory.places" :key="place.id" :place="place" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PlaceCard from '../components/PlaceCard.vue'

const route = useRoute()
const subcategory = ref(null)
const categoryColor = ref('#fff')

onMounted(async () => {
  const res = await fetch('/data.json')
  const json = await res.json()
  const category = json.categories.find(c => c.id === +route.params.categoryId)
  subcategory.value = category?.subcategories.find(s => s.id === +route.params.subcategoryId)
  categoryColor.value = category?.color || '#fff'
})
</script>

<style scoped>
h2, p{
  margin-left: 1rem;
}
h1{
  padding-left: 1rem;
  background-color: rgb(255, 236, 209);
  color: #fff;
}
</style>