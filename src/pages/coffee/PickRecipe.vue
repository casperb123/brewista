<template>
  <section>
    <base-back-title title="How do you want to brew" to="/coffee" />
    <section class="flex flex-col gap-10">
      <div v-if="hasFavoriteRecipes" class="flex flex-col gap-5">
        <p class="uppercase text-gray-400">Favorite Recipes</p>
        <ul class="flex flex-wrap gap-5">
          <recipe-item
            v-for="recipe in favoriteRecipes"
            :key="recipe"
            :id="recipe.id"
            :recipeId="recipe.recipeId"
            :coffeeId="coffeeId"
            :title="recipe.title"
            :beanAmount="recipe.beanAmount"
            :waterAmount="recipe.waterAmount"
            :grindSize="recipe.grindSize"
            :brewTime="recipe.brewTime"
            :steps="recipe.steps"
            class="flex-auto"
          />
        </ul>
      </div>
      <div class="flex flex-col gap-5">
        <p class="uppercase text-gray-400">Try a new recipe</p>
        <ul class="flex flex-wrap gap-5">
          <recipe-item
            v-for="recipe in recipes"
            :key="recipe"
            :id="recipe.id"
            :recipeId="recipe.recipeId"
            :coffeeId="coffeeId"
            :title="recipe.title"
            :beanAmount="recipe.beanAmount"
            :waterAmount="recipe.waterAmount"
            :grindSize="recipe.grindSize"
            :brewTime="recipe.brewTime"
            :steps="recipe.steps"
            class="flex-auto"
          />
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import RecipeItem from "../../components/coffee/RecipeItem.vue";

export default {
  components: {
    RecipeItem,
  },
  props: {
    coffeeId: {
      type: String,
      required: true,
    },
  },
  computed: {
    recipes() {
      return this.$store.getters["coffee/nonFavoriteRecipes"];
    },
    favoriteRecipes() {
      return this.$store.getters["coffee/favoriteRecipes"];
    },
    hasFavoriteRecipes() {
      return this.$store.getters["coffee/hasFavoriteRecipes"];
    },
  },
};
</script>