<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <button
    class="flex flex-row flex-wrap items-center gap-2 rounded-xl border-color-inno-green bg-gray-300 px-3 py-2 text-base font-medium active:border dark:text-color-darkblue"
  >
    {{ props.name }}
  </button>
</template>
