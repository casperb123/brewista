<template>
  <section class="flex gap-x-5 items-center mb-5">
    <router-link :to="to">
      <svg class="w-6 h-6">
        <use xlink:href="#arrowBack" />
      </svg>
    </router-link>
    <h2 class="text-lg">{{ title }}</h2>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>