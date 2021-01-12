<template>
  <h3 class="font-bold text-lg" :class="{ titleUppercase: titleUppercase }">
    {{ title }}
  </h3>
  <p v-if="!!subTitle" class="text-gray-400">{{ subTitle }}</p>
</template>

<script>
export default {
  props: {
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
  },
};
</script>

<style scoped>
.titleUppercase {
  @apply uppercase;
}
</style>