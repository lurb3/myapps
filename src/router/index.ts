import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeViewVue from "@/views/HomeView.vue";
import SignupViewVue from "@/views/SignupView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import ExpensesViewVue from "@/views/ExpensesView.vue";
import auth from "@/services/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "singup",
    component: SignupViewVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginViewVue,
  },
  {
    path: "/expenses",
    name: "expenses",
    component: ExpensesViewVue,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated()) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
