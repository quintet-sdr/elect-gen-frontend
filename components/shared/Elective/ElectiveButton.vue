<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  name: string
  active: boolean
  disabled: boolean
}>()

const emit = defineEmits(['click'])

const handleClick = () => {
  if (!props.disabled) {
    emit('click', props.name)
  }
}
</script>

<template>
  <button
    :class="[
      'flex w-96 flex-row items-center justify-center gap-2 rounded-xl border-2 px-3 py-2 text-base font-medium text-color-dark hover:border-color-accent',
      props.active
        ? 'bg-color-accent text-color-base'
        : 'bg-color-surface',
      props.disabled ? 'cursor-not-allowed opacity-50' : ''
    ]"
    @click="handleClick"
  >
    {{ props.name }}
  </button>
</template>

<style scoped></style>
