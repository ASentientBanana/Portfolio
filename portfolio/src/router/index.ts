import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
// import ProjectsAndSkills from '../views/AboutMe.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects-and-skills",
    name: "ProjectAndSkills",
    component: () => import("../views/ProjectAndSkills.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
