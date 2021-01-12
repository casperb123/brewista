<template>
  <section class="flex gap-x-3">
    <div class="box">
      <svg class="smallIcon">
        <use xlink:href="#bean" />
      </svg>
      <p>{{ beanAmount }}</p>
    </div>
    <div class="box">
      <svg class="smallIcon">
        <use xlink:href="#water" />
      </svg>
      <p>{{ waterAmount }}</p>
    </div>
    <div class="box">
      <svg class="smallIcon">
        <use xlink:href="#grind" />
      </svg>
      <p>{{ grindType }}</p>
    </div>
    <div class="box">
      <svg class="smallIcon">
        <use xlink:href="#time" />
      </svg>
      <p>{{ brewTime }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
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
};
</script>

<style scoped>
.smallIcon {
  @apply w-4 h-4;
}

.box {
  @apply flex items-center gap-x-1 text-gray-400;
}
</style>