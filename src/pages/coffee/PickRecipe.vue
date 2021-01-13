<template>
  <section>
    <base-back-title title="How do you want to brew" to="/coffee" />
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
      return this.$store.getters["coffee/recipes"];
    },
  },
};
</script>