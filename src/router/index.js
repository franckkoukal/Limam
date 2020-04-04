import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/apropos",
    name: "APropos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "apropos" */ "../views/APropos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
