<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue'

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
      'tablet:w-45 w-90 flex flex-row items-center justify-center gap-2 rounded-xl border-2 px-3 py-2 text-base font-medium text-color-dark hover:border-color-accent desktop:w-96',
      props.active ? 'bg-color-accent text-color-text' : 'bg-color-surface',
      props.disabled ? 'cursor-not-allowed opacity-50' : ''
    ]"
    @click="handleClick"
  >
    {{ props.name }}
  </button>
</template>

<style scoped></style>
