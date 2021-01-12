<template>
  <li>
    <base-card class="flex">
      <svg class="w-20 h-20">
        <use :xlink:href="recipeId" />
      </svg>
      <div>
        <brew-title
          :title="title"
          :titleUppercase="titleUppercase"
          :subTitle="subTitle"
        />
        <brew-small-details
          :beanAmount="beanAmount"
          :waterAmount="waterAmount"
          :grindType="grindType"
          :brewTime="brewTime"
        />
      </div>
    </base-card>
  </li>
</template>

<script>
import BrewTitle from "./BrewTitle.vue";
import BrewSmallDetails from "./BrewSmallDetails.vue";

export default {
  components: {
    BrewTitle,
    BrewSmallDetails,
  },
  props: {
    recipe: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    titleUppercase: {
      type: Boolean,
      required: false,
      default: false,
    },
    subTitle: {
      type: String,
      required: false,
      default: null,
    },
    beanAmount: {
      type: String,
      required: true,
    },
    waterAmount: {
      type: String,
      required: true,
    },
    grindType: {
      type: String,
      required: true,
    },
    brewTime: {
      type: String,
      required: true,
    },
  },
  computed: {
    recipeId() {
      return `#${this.recipe}`;
    },
  },
};
</script>