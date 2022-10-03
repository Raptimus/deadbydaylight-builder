<script setup>
  defineProps({
    icon: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <component :is="icon" class="icon"></component>
</template>

<style lang="scss" scoped>
  .icon {
    height: 2rem;
    width: 2rem;
  }
</style>
