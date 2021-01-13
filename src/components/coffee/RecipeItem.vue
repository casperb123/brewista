<template>
  <li>
    <router-link to="/feed">
      <base-card
        class="flex gap-x-4 h-full hover:bg-gray-100 transition-colors"
      >
        <svg class="w-16 h-16">
          <use :xlink:href="recipeId" />
        </svg>
        <div class="flex flex-col justify-center">
          <base-title :title="title" />
          <base-recipe-details
            :beanAmount="beanAmount"
            :waterAmount="waterAmount"
            :grindSize="grindSize"
            :brewTime="brewTime"
          />
        </div>
      </base-card>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    recipeId: {
      type: String,
      required: true,
    },
    coffeeId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
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
    steps: {
      type: Array,
      required: true,
    },
  },
};
</script>