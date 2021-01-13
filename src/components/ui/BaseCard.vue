<template>
  <div class="border-gray-300 border p-6" :class="{ interactive: interactive }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    interactive: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.interactive {
  @apply hover:bg-gray-100 hover:shadow-lg transition-all;
}
</style>