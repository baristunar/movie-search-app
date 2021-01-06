import Home from "@/views/Home";
import Favorites from "@/views/Favorites";


import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path:"/favorites",
    component: Favorites,
  }

];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});
export default router;
