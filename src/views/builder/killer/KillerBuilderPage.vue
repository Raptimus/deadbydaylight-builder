<script setup>
  import { watch } from 'vue'
  import Perk from '@/components/perk/Perk.vue'
  import Element from '@/components/element/Element.vue'

  import { useRoute } from 'vue-router'
  import { useKillerStore } from '@/stores/killer'

  const route = useRoute()
  const killerStore = useKillerStore()

  watch(
    killerStore.getKiller,
    (newKiller) => {
      if (!newKiller) {
        killerStore.fetchKiller(route.params.id)
      }
    },
    { immediate: true }
  )
</script>

<template>
  <div class="killer">Killer numéro : {{ killerStore.getKiller }}</div>

  <!-- <Element label="Judith's Tombstone" @click="fetchAddons()" /> -->
  <!-- <Perk /> -->
</template>

<style lang="scss" scoped>
  .killer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
