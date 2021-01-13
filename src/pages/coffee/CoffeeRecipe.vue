<template>
  <section>
    <base-back-title :to="backLink">
      <div>
        <h2 class="text-lg">{{ recipe.title }}</h2>
        <base-recipe-details
          :beanAmount="recipe.beanAmount"
          :waterAmount="recipe.waterAmount"
          :grindSize="recipe.grindSize"
          :brewTime="recipe.brewTime"
        />
      </div>
    </base-back-title>
    <ul class="flex flex-col gap-5">
      <li v-for="step in recipe.steps" :key="step">
        <p class="uppercase text-gray-400">
          Step {{ recipe.steps.indexOf(step) + 1 }}
        </p>
        <p>{{ step }}</p>
      </li>
    </ul>
    <base-button class="flex items-center gap-3 mt-10" @click="saveCoffeeBrew">
      Finish
      <svg class="w-4 h-4">
        <use xlink:href="#arrowForward" />
      </svg>
    </base-button>
  </section>
</template>

<script>
export default {
  props: {
    coffeeId: {
      type: String,
      required: true,
    },
    recipeId: {
      type: String,
      required: true,
    },
  },
  created() {
    const recipes = this.$store.getters["coffee/recipes"];
    const coffees = this.$store.getters["coffee/coffee"];

    this.recipe = recipes.find((r) => r.id === this.recipeId);
    this.coffee = coffees.find((c) => c.id === this.coffeeId);
  },
  data() {
    return {
      recipe: null,
      coffee: null,
    };
  },
  computed: {
    backLink() {
      return `/recipes/${this.coffeeId}`;
    },
  },
  methods: {
    saveCoffeeBrew() {
      const coffeeBrewData = {
        coffeeId: this.coffee.id,
        recipeId: this.recipe.id,
      };

      this.$store.dispatch("coffee/addCoffeeBrew", coffeeBrewData);
      this.$router.replace("/feed");
    },
  },
};
</script>