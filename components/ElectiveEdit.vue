<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <article
    class="order-1 flex w-width-100 flex-row flex-wrap items-center gap-40 rounded-xl bg-gray-300 px-3 py-2 text-base font-medium dark:text-color-darkblue"
  >
    <span class="truncate-custom">
      {{ props.name }}
    </span>
    <button class="order-2 bg-transparent italic">Edit</button>
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
