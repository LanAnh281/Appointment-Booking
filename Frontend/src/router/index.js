import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/common/login.vue"),
  },
  {
    path: "/admin/account",
    name: "Account",
    component: () => import("../view/admin/Account/account.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
