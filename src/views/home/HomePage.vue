<script setup>
  import Perk from '@/components/perk/Perk.vue'
</script>

<template>
  <div class="home">
    <Perk v-for="n in 4" :key="n" />
  </div>
</template>

<style lang="scss" scoped>
  .home {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
