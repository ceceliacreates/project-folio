import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/folio",
    name: "folio",
    component: () => import("../views/Folio.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue")
  },
  {
    path: "/sign-in",
    name: "signin",
    component: () => import("../views/Signin.vue")
  },
  {
    path: "/join",
    name: "join",
    component: () => import("../views/Join.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../views/Add.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      };
    }
  }
});

export default router;
