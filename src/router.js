import { createRouter, createWebHistory } from "vue-router";

import BrewFeed from "./pages/coffee/BrewFeed.vue";
import PickCoffee from "./pages/coffee/PickCoffee.vue";
import PickRecipe from "./pages/coffee/PickRecipe.vue";
import CoffeeRecipe from "./pages/coffee/CoffeeRecipe.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/feed" },
    { path: "/feed", component: BrewFeed },
    { path: "/coffee", component: PickCoffee },
    { path: "/recipes/:coffeeId", component: PickRecipe, props: true },
    {
      path: "/recipe/:coffeeId/:recipeId",
      component: CoffeeRecipe,
      props: true,
    },
  ],
});

export default router;
