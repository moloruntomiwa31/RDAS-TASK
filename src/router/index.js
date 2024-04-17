import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/items",
      name: "items",
      component: () => import("../views/Items.vue"),
    },
    {
      path: "/students",
      name: "students",
      component: () => import("../views/Students.vue"),
    },
  ],
});

export default router;
