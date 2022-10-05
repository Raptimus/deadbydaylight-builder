<script setup>
  import { computed } from 'vue'
  import { getStyleVariables } from './rules'

  const props = defineProps({
    color: {
      type: String,
      default: '#512562'
    },
    size: {
      type: Number,
      default: 70
    },
    imageSource: {
      type: String,
      default: 'src/assets/images/raptimus-icon-white.png'
    },
    imageAlt: {
      type: String,
      default: 'Perk icon'
    },
    label: {
      type: String,
      default: 'Hex: No One Escapes Death'
    }
  })

  const perkStyleVariable = computed(() => getStyleVariables(props.size, props.color))
</script>

<template>
  <div class="perk" :style="perkStyleVariable">
    <div class="perk__wrapper">
      <div class="perk__container">
        <img class="perk__icon" :src="imageSource" :alt="imageAlt" />
      </div>
    </div>
    <div class="perk__label">{{ label }}</div>
  </div>
</template>

<style lang="scss" scoped>
  .perk {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: var(--diagonal-size);
    }

    &__container {
      height: var(--size);
      width: var(--size);
      transform: rotate(45deg);
      border: var(--border-size) solid $dbd-black;
      background-color: var(--background-color);
    }

    &__icon {
      max-height: var(--icon-size);
      transform: translate(var(--icon-offset), var(--icon-offset)) rotate(-45deg);
    }

    &__label {
      text-align: center;
      color: $dbd-white;
      padding-top: 0.5rem;
    }
  }
</style>
