<template>
  <div v-if="category">
    <h1>{{ category.name }}</h1>
    <SubcategoryList
      :subcategories="category.subcategories"
      :categoryId="category.id"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import SubcategoryList from '../components/SubcategoryList.vue'

const route = useRoute()
const category = ref(null)

async function loadCategory(id) {
  const res = await fetch('/data.json')
  const json = await res.json()
  category.value = json.categories.find(c => c.id === +id)
}

onMounted(() => {
  loadCategory(route.params.id)
})

watch(() => route.params.id, (newId) => {
  loadCategory(newId)
})
</script>
