<template>
  <section>
    <base-back-title title="Pick your coffee" to="/feed" />
    <ul class="flex flex-wrap gap-5">
      <coffee-item
        v-for="coffee in coffee"
        :key="coffee"
        :id="coffee.id"
        :title="coffee.title"
        :subTitle="coffee.subTitle"
        :description="coffee.description"
        :process="coffee.process"
        :roastProfile="coffee.roastProfile"
        :varieties="coffee.varieties"
        :country="coffee.country"
        class="flex-1"
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
    coffee() {
      return this.$store.getters["coffee/coffee"];
    },
  },
};
</script>

<style scoped>
li {
  min-width: 350px;
}
</style>