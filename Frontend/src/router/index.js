import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/admin",
    alias: "/login",
    name: "Login",
    component: () => import("../App.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem("token"); // Kiểm tra xem người dùng đã đăng nhập hay chưa
  // console.log(`isAuthenticated `, isAuthenticated);
  // const customerId = sessionStorage.getItem("customerId");
  // const customerName = sessionStorage.getItem("customerName");
  // const role = sessionStorage.getItem("role");
  // console.log(customerId, customerName, role);
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    // Nếu trang yêu cầu xác thực và người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    next({ name: "Login" });
  } else {
    next();
  }
});
export default router;
