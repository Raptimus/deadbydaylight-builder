<script setup>
  import { computed } from 'vue'
  import { getStyleVariables } from './rules'

  const props = defineProps({
    iconSource: {
      type: String,
      default: 'https://www.dbdbuilds.com/images/itemsAddons/iconaddon_judithstombstone.png'
    },
    label: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '$dbd-grey-deep'
    }
  })

  const styleVariables = computed(() => getStyleVariables(props.size, props.color))
</script>

<template>
  <div class="element" :style="styleVariables">
    <div class="element__container">
      <img class="element__icon" :src="iconSource" :alt="`${label} icon`" />
    </div>
    <div class="element__label">{{ label }}</div>
  </div>
</template>

<style lang="scss" scoped>
  .element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    &__container {
      height: var(--container-size);
      width: var(--container-size);
      background-color: var(--background-color);
      border: 3px solid $dbd-black;
    }

    &__icon {
      height: var(--icon-size);
    }

    &__label {
      text-align: center;
      color: $dbd-white;
      padding-top: 0.5rem;
    }
  }
</style>
