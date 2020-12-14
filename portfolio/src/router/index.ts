import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Root from "../views/Root.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Root",
    component: Root,
    props:true
  
  },
  {
    path: "/admin",
    component: () => {
      console.log(":s");
      return import("../views/AdminPanel.vue")
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
