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
      'flex w-72 flex-row items-center justify-center gap-2 rounded-xl border-2 px-3 py-2 text-base font-medium text-color-darkblue hover:border-color-inno-green',
      props.active
        ? 'bg-color-inno-green text-color-lightgray dark:text-color-lightgray'
        : 'bg-gray-300',
      props.disabled ? 'cursor-not-allowed opacity-50' : ''
    ]"
    @click="handleClick"
  >
    {{ props.name }}
  </button>
</template>

<style scoped></style>
