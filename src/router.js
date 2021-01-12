import { createRouter, createWebHistory } from "vue-router";

import BrewFeed from "./pages/coffee/BrewFeed.vue";
import PickCoffee from "./pages/coffee/PickCoffee.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/feed" },
    { path: "/feed", component: BrewFeed },
    { path: "/coffee", component: PickCoffee },
  ],
});

export default router;
