<script lang="ts" setup>
const props = defineProps<{
  name: string
  description?: string
}>()
</script>

<template>
  <article
    class="dark:text-color-darkblue flex flex-row flex-wrap items-center gap-2 rounded-xl bg-gray-300 px-3 py-2 text-base font-medium"
  >
    {{ props.name }}
    <UPopover v-if="props.description" mode="hover">
      <Icon class="text-gray-500" name="fa6-solid:circle-info" />
      <template #panel>
        <p class="px-2 py-1">
          {{ props.description }}
        </p>
      </template>
    </UPopover>
  </article>
</template>
