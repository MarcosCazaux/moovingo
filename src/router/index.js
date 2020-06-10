import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home
  },
  {
    path: "/list",
    name: "ListView",
    component: () => import("../views/ListView.vue")
  },
  {
    path: "/list/:id",
    name: "DetailView",
    props: true,
    component: () => import("../views/DetailView.vue")
  },
  {
    path: "*",
    name: "SoonView",
    component: () => import("../views/SoonView.vue")
  }
];

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
