<script setup>
  import { RouterView } from 'vue-router'
  import Menu from '@/components/menu/Menu.vue'
</script>

<template>
  <header>
    <Menu />
  </header>

  <RouterView />
</template>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
