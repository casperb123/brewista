<template>
  <section>
    <back-title title="Pick your coffee" to="/feed" />
    <ul class="flex flex-wrap gap-5">
      <coffee-item
        v-for="coffee in availableCoffee"
        :key="coffee"
        :id="coffee.id"
        :title="coffee.title"
        :subTitle="coffee.subTitle"
        :description="coffee.description"
        :process="coffee.process"
        :roastProfile="coffee.roastProfile"
        :varieties="coffee.varieties"
        :country="coffee.country"
        class="item flex-1"
      />
    </ul>
  </section>
</template>

<script>
import CoffeeItem from "../../components/coffee/CoffeeItem.vue";

export default {
  components: {
    CoffeeItem,
  },
  computed: {
    availableCoffee() {
      return this.$store.getters["coffee/availableCoffee"];
    },
  },
};
</script>

<style scoped>
.item {
  min-width: 350px;
}
</style>