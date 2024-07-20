<script lang="ts" setup>
import Header from '~/components/widgets/Header.vue'

const attrs = useAttrs()

const back = attrs.back as boolean
</script>

<template>
  <div class="mx-32 flex flex-col gap-4">
    <Header :back="back">
      <slot name="header" />
    </Header>

    <main class="flex w-full flex-col items-center gap-6 pb-16">
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-color-base text-color-text;
}

.u-button {
  @apply bg-color-accent;
}
</style>
