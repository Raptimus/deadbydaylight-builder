<script setup>
  import { RouterLink } from 'vue-router'
  import Icon from '@/components/Icon.vue'
  import { links } from '@/components/menu/config'
  import { ROUTES } from '@/router'
</script>

<template>
  <nav class="menu">
    <RouterLink :to="ROUTES.HOME_ROUTE" class="link-home">
      <img src="@/assets/logo/dbd-logo.png" alt="Dead By Daylight logo" />
    </RouterLink>
    <ul>
      <li v-for="link in links" :key="link.label" class="menu-element">
        <Icon v-if="link.icon" :icon="link.icon" :alt="link.alt" />
        <RouterLink :to="link.route" class="menu-link">{{ link.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .link-home {
    display: flex;
    align-items: center;

    img {
      max-height: 80%;
    }
  }

  .menu {
    background: rgba($dbd-black, 0.85);
    height: 6rem;
    display: flex;
    justify-content: space-around;

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      .menu-element {
        display: flex;
        align-items: center;
        color: $dbd-white;
        list-style: none;
        padding: 0.5rem;

        .icon {
          padding-right: 1rem;
        }

        .menu-link {
          color: $dbd-white;
          font-size: 1rem;
          text-decoration: none;
        }
      }
    }
  }
</style>
