<template>
  <li>
    <router-link to="/feed">
      <base-card class="flex flex-col">
        <brew-title
          :title="title"
          :titleUppercase="true"
          :subTitle="subTitle"
        />
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
      type: Number,
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
};
</script>