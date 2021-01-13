<template>
  <div class="flex flex-col">
    <h2 class="uppercase text-gray-400 mb-4">Latest Brews</h2>
    <p v-if="!hasBrews" class="text-2xl text-center">
      Start brewing a cup by clicking the button below
    </p>
    <ul v-else class="flex flex-wrap gap-5">
      <brew-item
        v-for="brew in latestBrews"
        :key="brew"
        :recipeId="brew.recipe.recipeId"
        :title="brew.coffee.title"
        :subTitle="brew.coffee.subTitle"
        :beanAmount="brew.recipe.beanAmount"
        :waterAmount="brew.recipe.waterAmount"
        :grindSize="brew.recipe.grindSize"
        :brewTime="brew.recipe.brewTime"
        class="flex-auto"
      />
    </ul>
    <div class="mt-10 flex flex-wrap justify-center gap-4">
      <base-button link to="/coffee">Brew a cup</base-button>
      <base-button mode="flat" @click="loadCoaches">Refresh</base-button>
    </div>
  </div>
</template>

<script>
import BrewItem from "../../components/coffee/BrewItem.vue";
import BaseButton from "../../components/ui/BaseButton.vue";

export default {
  components: {
    BrewItem,
    BaseButton,
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    async loadCoaches(refresh = false) {
      try {
        await this.$store.dispatch("coffee/loadCoffeeBrews", {
          forceRefresh: refresh,
        });
      } catch (error) {}
    },
  },
  computed: {
    latestBrews() {
      const dataBrews = this.$store.getters["coffee/latestBrews"];
      const dataCoffees = this.$store.getters["coffee/coffee"];
      const dataRecipes = this.$store.getters["coffee/recipes"];

      const brews = [];

      for (const index in dataBrews) {
        const brew = {
          coffee: dataCoffees.find((c) => c.id === dataBrews[index].coffeeId),
          recipe: dataRecipes.find((r) => r.id === dataBrews[index].recipeId),
        };
        brews.push(brew);
      }

      return brews;
    },
    hasBrews() {
      return this.$store.getters["coffee/hasBrews"];
    },
  },
};
</script>