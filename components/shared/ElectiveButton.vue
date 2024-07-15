<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <button
    class="flex flex-row flex-wrap items-center gap-2 rounded-xl bg-gray-300 px-3 py-2 text-base font-medium dark:text-color-darkblue active:border border-color-inno-green"
  >
    {{ props.name }}
  </button>
</template>
