import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/category/:id', name: 'category', component: CategoryView },
  { path: '/category/:categoryId/:subcategoryId', name: 'detail', component: DetailView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
