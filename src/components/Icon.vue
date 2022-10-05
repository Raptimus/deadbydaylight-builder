<script setup>
  defineProps({
    icon: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <img class="icon" :alt="alt" :src="`src/assets${icon}`" />
</template>

<style lang="scss" scoped>
  .icon {
    height: 2rem;
    width: 2rem;
  }
</style>
