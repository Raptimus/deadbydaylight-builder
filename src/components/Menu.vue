<script setup>
  import { RouterLink } from 'vue-router'
  import HomeIcon from '@/components/icons/HomeIcon.vue'
  import BuilderIcon from '@/components/icons/BuilderIcon.vue'
  import ShrineOfSecretsIcon from '@/components/icons/ShrineOfSecretsIcon.vue'
  import Icon from '@/components/Icon.vue'
  import { ROUTES } from '@/router'

  const links = [
    {
      icon: HomeIcon,
      route: ROUTES.HOME_ROUTE,
      label: 'Accueil'
    },
    {
      icon: BuilderIcon,
      route: ROUTES.BUILDER_ROUTE,
      label: 'Builder'
    }
    // {
    //   route: ROUTES.PERKS_ROUTE,
    //   label: 'Compétences'
    // },
    // {
    //   icon: ShrineOfSecretsIcon,
    //   route: ROUTES.SHRINE_OF_SECRETS_ROUTE,
    //   label: 'Temple des secrets'
    // },
    // {
    //   route: ROUTES.ABOUT_ROUTE,
    //   label: 'A Propos'
    // }
  ]
</script>

<template>
  <nav class="menu">
    <ul>
      <li v-for="link in links" :key="link.label">
        <Icon v-if="link.icon" :icon="link.icon" />
        <RouterLink :to="link.route">{{ link.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .menu {
    background: $dbd-black;
  }
</style>
