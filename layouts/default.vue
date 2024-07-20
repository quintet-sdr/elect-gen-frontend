<script lang="ts" setup>
import Header from '~/components/widgets/Header.vue'
</script>

<template>
  <div class="mx-32 flex flex-col">
    <Header>
      <slot name="header" />
    </Header>

    <main class="flex w-full flex-col items-center gap-4 pb-16">
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
