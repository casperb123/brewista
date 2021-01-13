<template>
  <button v-if="!link" :class="mode">
    <slot />
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  @apply rounded-full uppercase font-bold bg-yellow-200 px-14 py-6 self-center hover:bg-yellow-300 hover:text-black transition-colors;
}

.flat {
  @apply bg-transparent;
}
</style>