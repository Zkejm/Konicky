<template>
  <div>
    <div
      v-for="sub in subcategories"
      :key="sub.id"
      @click="goToDetail(sub.id)"
      style="border: 1px solid #ccc; padding: 1rem; margin: 1rem; cursor: pointer;"
    >
      <h3>{{ sub.name }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps(['subcategories', 'categoryId'])
const router = useRouter()

function goToDetail(subId) {
  router.push(`/category/${props.categoryId}/${subId}`)
}
</script>
