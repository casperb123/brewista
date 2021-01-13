<template>
  <li>
    <router-link to="/feed">
      <base-card class="flex flex-col gap-y-5 h-full">
        <brew-title
          :title="title"
          :titleUppercase="true"
          :subTitle="subTitle"
        />
        <p>{{ description }}</p>
        <section class="grid grid-cols-2 gap-5">
          <div>
            <p class="detailTitle">Process</p>
            <p>{{ process }}</p>
          </div>
          <div>
            <p class="detailTitle">Roast Profile</p>
            <p>{{ roastProfile }}</p>
          </div>
          <div>
            <p class="detailTitle">Varieties</p>
            <p>{{ varietiesString }}</p>
          </div>
          <div>
            <p class="detailTitle">Country</p>
            <p>{{ country }}</p>
          </div>
        </section>
      </base-card>
    </router-link>
  </li>
</template>

<script>
import BrewTitle from "./BrewTitle.vue";

export default {
  components: {
    BrewTitle,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    process: {
      type: String,
      required: true,
    },
    roastProfile: {
      type: String,
      required: true,
    },
    varieties: {
      type: Array,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  computed: {
    varietiesString() {
      return this.varieties.join(", ");
    },
  },
};
</script>

<style scoped>
.detailTitle {
  @apply text-gray-400 uppercase;
}
</style>