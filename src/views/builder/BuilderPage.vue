<script setup>
  import { ref, watch } from 'vue'
  import Perk from '@/components/perk/Perk.vue'
  import Element from '@/components/element/Element.vue'
  import { deadByDaylightService } from '@/service/deadByDaylightService'

  const SURVIVOR = 'survivor'
  const KILLER = 'killer'

  const mode = ref(SURVIVOR)
  const feeds = ref()

  watch(mode, async (newMode) => {
    if (newMode === SURVIVOR) {
      // Fetch survivors, items, perks, addons
    }

    if (newMode === KILLER) {
      // Fetch killers, items, perks, addons
      feeds.value = await deadByDaylightService.fetchKillers()
    }
  })
</script>

<template>
  <div class="builder">
    <div class="builder__cooker">
      <div class="choose-mode">
        <img
          class="choose-mode__selection"
          src="@/assets/icons/killer.png"
          alt="killer mode"
          role="button"
          @click="mode = KILLER"
        />
        <div class="choose-mode__between">OR</div>
        <img
          class="choose-mode__selection"
          src="@/assets/icons/survivor.png"
          alt="survivor mode"
          role="button"
          @click="mode = SURVIVOR"
        />
      </div>

      <Element label="Judith's Tombstone" @click="fetchAddons()" />
      <!-- <Perk /> -->
    </div>
    <div class="builder__feeds">
      <!-- <Perk v-for="n in 15" :key="n" /> -->
      <div v-for="(feed, index) in feeds" :key="index">
        <img :src="feed.portrait" :alt="feed.name" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .builder {
    &__cooker {
      display: flex;
      flex-direction: column;

      .choose-mode {
        display: flex;
        align-items: center;
        justify-content: center;

        &__selection {
          max-height: 75px;
          cursor: pointer;
          transition: all 0.25s ease;

          &:hover {
            transform: scale(1.25);
          }
        }

        &__between {
          color: $dbd-white;
          padding: 1rem;
        }
      }
    }

    &__feeds {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .perk {
        flex: 5 1 20%;
      }
    }
  }
</style>
