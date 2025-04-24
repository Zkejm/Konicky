import { createRouter, createWebHistory } from "vue-router";
import CategoriesView from "@/views/CategoriesView.vue";
import SubcategoriesView from "@/views/SubcategoriesView.vue";
import PlacesView from "@/views/PlacesView.vue";
import PlaceDetailView from "@/views/PlaceDetailView.vue";

const routes = [
  { path: "/", component: CategoriesView },
  { path: "/categories/:id", component: SubcategoriesView, props: true },
  { path: "/subcategories/:id", component: PlacesView, props: true },
  { path: "/places/:id", component: PlaceDetailView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;