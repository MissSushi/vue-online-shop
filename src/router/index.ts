import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddProductView from "@/views/AddProductView.vue";
import UpdateProductView from "@/views/UpdateProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products/add",
      name: "add-product",
      component: AddProductView,
      // component: () => import('@/views/AddProductView.vue')
    },
    {
      path: "/products/update/:id",
      name: "update-product",
      component: UpdateProductView,
    },
  ],
});

export default router;
