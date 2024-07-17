<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  name: string
}>();

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click', props.name);
};
</script>

<template>
  <button
    @click="handleClick"
    class="flex flex-row flex-wrap items-center gap-2 rounded-xl border-color-inno-green bg-gray-300 px-3 py-2 text-base font-medium active:border dark:text-color-darkblue"
  >
    {{ props.name }}
  </button>
</template>
