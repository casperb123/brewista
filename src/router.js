import { createRouter, createWebHistory } from "vue-router";

import BrewFeed from "./pages/brews/BrewFeed.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/feed" },
    { path: "/feed", component: BrewFeed },
  ],
});

export default router;
