<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <article
    class="flex flex-row flex-wrap items-center order-1 gap-40 w-width-100 rounded-xl bg-gray-300 px-3 py-2 text-base font-medium dark:text-color-darkblue"
  >
  <span class="truncate-custom">
      {{ props.name }}
    </span>
  <button class="bg-transparent italic order-2">Edit</button>
  </article>
</template>

<style scoped>
  .truncate-custom {
  display: inline-block;
  max-width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>