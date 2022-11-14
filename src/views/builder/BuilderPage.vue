<script setup>
  import { ref, watch } from 'vue'
  import { RouterLink } from 'vue-router'
  import { useKillerStore } from '@/stores/killer'

  const SURVIVOR = 'survivor'
  const KILLER = 'killer'

  const killerStore = useKillerStore()

  const mode = ref(KILLER)

  watch(
    mode,
    async (newMode) => {
      // Clean Store
      killerStore.$reset()

      if (newMode === SURVIVOR) {
        // Fetch survivors, items, perks, addons
      }

      if (newMode === KILLER) {
        // Fetch killers, items, perks, addons
        killerStore.fetchKillers()
      }
    },
    {
      immediate: true
    }
  )
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
    </div>
    <div class="builder__feeds">
      <div
        class="builder__feed"
        v-for="killer in killerStore.getKillers"
        :key="killer.id"
        :id="killer.id"
      >
        <RouterLink
          class="builder__feed__link"
          :to="{ name: 'killer', params: { id: killer.code } }"
        >
          <img class="builder__feed__portrait" :src="killer.portrait" :alt="killer.name" />
          <img
            class="builder__feed__fog-background"
            src="@/assets/images/fog-black.png"
            alt="fog"
          />
          <label class="builder__feed__name" :for="killer.id">{{ killer.name }}</label>
        </RouterLink>
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
    }

    &__feed {
      flex: 5 1 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__link {
        color: $dbd-white;
        position: relative;
        width: 150px;
        height: 210px;
        display: flex;
        justify-content: center;
        align-items: end;
      }

      &__portrait {
        position: absolute;
        max-width: 150px;
      }

      &__fog-background {
        position: absolute;
        bottom: 15px;
        left: 15px;
        z-index: 1;
        width: 120px;
        opacity: 0.5;
      }

      &__name {
        position: absolute;
        bottom: 25px;
        z-index: 2;
        max-width: 80%;
        word-break: break-word;
        text-align: center;
      }
    }
  }
</style>
