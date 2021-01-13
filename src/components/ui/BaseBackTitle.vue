<template>
  <nav class="flex gap-x-5 items-center mb-5">
    <router-link :to="to">
      <svg class="w-6 h-6">
        <use xlink:href="#arrowBack" />
      </svg>
    </router-link>
    <slot>
      <h2 class="text-lg">{{ title }}</h2>
    </slot>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>