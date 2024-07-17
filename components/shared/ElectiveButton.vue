<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  name: string
  active: boolean
}>()

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.name)
}
</script>

<template>
  <button
    :class="[
      'flex flex-row flex-wrap items-center gap-2 rounded-xl border-color-inno-green px-3 py-2 text-base font-medium dark:text-color-darkblue',
      props.active ? 'bg-color-inno-green text-white' : 'bg-gray-300'
    ]"
    @click="handleClick"
  >
    {{ props.name }}
  </button>
</template>

<style scoped></style>
