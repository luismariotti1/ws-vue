import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
