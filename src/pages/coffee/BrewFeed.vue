<template>
  <div class="flex flex-col">
    <h2 class="uppercase text-gray-400 mb-4">Latest Brews</h2>
    <ul class="flex flex-wrap gap-5">
      <brew-item
        v-for="brew in latestBrews"
        :key="brew"
        :recipeId="brew.recipeId"
        :title="brew.title"
        :subTitle="brew.subTitle"
        :beanAmount="brew.beanAmount"
        :waterAmount="brew.waterAmount"
        :grindSize="brew.grindSize"
        :brewTime="brew.brewTime"
        class="flex-1"
      />
    </ul>
    <router-link
      to="/coffee"
      class="rounded-full uppercase font-bold bg-yellow-200 px-14 py-6 self-center mt-10 hover:bg-yellow-300 transition-colors"
    >
      Brew a cup
    </router-link>
  </div>
</template>

<script>
import BrewItem from "../../components/coffee/BrewItem.vue";

export default {
  components: {
    BrewItem,
  },
  computed: {
    latestBrews() {
      return this.$store.getters["coffee/latestBrews"];
    },
  },
};
</script>