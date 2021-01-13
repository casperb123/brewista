<template>
  <li>
    <base-card class="flex items-center gap-x-4">
      <svg class="w-16 h-16">
        <use :xlink:href="recipeId" />
      </svg>
      <div>
        <base-title
          :title="title"
          :titleUppercase="true"
          :subTitle="subTitle"
        />
        <base-recipe-details
          :beanAmount="beanAmount"
          :waterAmount="waterAmount"
          :grindSize="grindSize"
          :brewTime="brewTime"
        />
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: {
    recipeId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
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
    grindSize: {
      type: String,
      required: true,
    },
    brewTime: {
      type: String,
      required: true,
    },
  },
};
</script>