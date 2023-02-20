import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogIn from "../views/LoginView.vue";
import SignUp from "../views/SignupView.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: LogIn,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
  ],
});

export default router;
