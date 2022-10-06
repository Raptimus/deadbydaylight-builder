<script setup>
  import { RouterView } from 'vue-router'
  import Menu from '@/components/menu/Menu.vue'
</script>

<template>
  <header>
    <Menu />
  </header>

  <RouterView class="background-opacity" />
</template>

<style lang="scss">
  body {
    margin: 0;
    min-height: 100vh;
    background-image: url('@/assets/images/dbd-background.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: $dbd-white;
  }

  .background-opacity {
    background-color: rgba($dbd-black, 0.35);
  }
</style>
