<script setup>
  import { RouterView } from 'vue-router'
  import Menu from '@/components/Menu.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Menu />
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
  @import '@/assets/_colors.scss';
</style>
