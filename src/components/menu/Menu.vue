<script setup>
  import { RouterLink } from 'vue-router'
  import Icon from '@/components/Icon.vue'
  import { links } from '@/components/menu/config'
  import { ROUTES } from '@/router'
</script>

<template>
  <nav class="menu">
    <RouterLink :to="ROUTES.HOME_ROUTE" class="menu__link__home">
      <img src="@/assets/logo/dbd-logo.png" alt="Dead By Daylight logo" />
    </RouterLink>
    <ul>
      <li v-for="link in links" :key="link.label" class="menu__link">
        <Icon v-if="link.icon" :icon="link.icon" :alt="link.alt" class="menu__link__icon" />
        <RouterLink :to="link.route" class="menu__link__hyperlink--text">{{ link.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .menu {
    background: rgba($dbd-black, 0.85);
    height: 6rem;
    display: flex;
    justify-content: space-around;

    .menu__link__home {
      display: flex;
      align-items: center;

      img {
        max-height: 80%;
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      .menu__link {
        display: flex;
        align-items: center;
        color: $dbd-white;
        list-style: none;
        padding: 0.5rem;

        &__icon {
          padding-right: 1rem;
        }

        &__hyperlink--text {
          color: $dbd-white;
          font-size: 1rem;
          text-decoration: none;
        }
      }
    }
  }
</style>
