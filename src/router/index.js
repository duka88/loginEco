import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Vehicle from "../views/Vehicle";
import VehicleEdit from "../views/VehicleEdit";
import ErrorPage from "../views/ErrorPage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/vehicle",
    name: "vehicle",
    component: Vehicle,
  },
  {
    path: "/edit-vehicle",
    name: "edit-vehicle",
    component: VehicleEdit,
  },
  {
    path: "*",
    name: "error-page",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
