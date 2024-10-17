import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/basic",
  },
  {
    path: "/basic",
    component: () => import("../components/basic.vue"),
  },
  {
    path: "/provider",
    component: () => import("../components/provider.vue"),
  },
  {
    path: "/panel",
    component: () => import("../components/panel.vue"),
  },
  {
    path: "/axios",
    component: () => import("../components/axios.vue"),
  },
  {
    path: "/save",
    component: () => import("../components/save.vue"),
  },
  {
    path: "/saveNew",
    component: () => import("../components/saveNew.vue"),
  },
  {
    path: "/event",
    component: () => import("../components/event.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
