import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import DashboardPage from "@/views/DashboardPage";

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
  },
  {
    path: "/dashboard",
    name: "Dashboard Page",
    component: DashboardPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
