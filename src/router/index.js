import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Vehicle from "../views/Vehicle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/vehicle/:id",
    name: "Vehicle",
    component: Vehicle,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
