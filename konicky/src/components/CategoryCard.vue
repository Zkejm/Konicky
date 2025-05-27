<template>
  <div :style="{ backgroundColor: category?.color }">
    <SubcategoryList
      :subcategories="category.subcategories"
      :categoryId="category.id"
    />
    <BottomNav :color="category?.color" />
  </div>
</template>

<script setup>
defineProps(['category'])
</script>

<style scoped>
.category-card {
  padding: 1rem;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
