import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/common/login.vue"),
  },

  // homepage
  {
    path: "/home",
    name: "home",
    component: () => import("../view/home/index.vue")
  },
  //location
  {
    path: "/location",
    name: "location",
    component: () => import("../view/location/index.vue")
  },
  //services
  {
    path: "/service",
    name: "service",
    component: () => import("../view/services/index.vue")
  },

  {
    path: "/service/comfirm",
    name: "cofirm",
    component: () => import("../view/services/comfirm.vue")
  },
  {
    path: "/service/form",
    name: "form",
    component: () => import("../view/services/form.vue")
  },

  {
    path: "/service/services",
    name: "services",
    component: () => import("../view/services/services.vue")
  },
  //Admin
  {
    path: "/admin/account",
    name: "Account",
    component: () => import("../view/admin/account/account.vue"),
  },
  //User
  {
    path: "/",
    name: "User",
    component: () => import("../view/user/index.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
