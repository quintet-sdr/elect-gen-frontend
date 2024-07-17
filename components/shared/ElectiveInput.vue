<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

interface Props {
  headerName: string;
  placeholder?: string;
  type?: string;
  autocomplete?: string;
  modelValue: string | number; // поддержка для v-model
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const value = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  value.value = newValue;
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  value.value = target.value;
  emit('update:modelValue', value.value);
};
</script>

<template>
  <div class="flex flex-col items-start justify-around">
    <h3 class="text-xl font-semibold">{{ props.headerName }}</h3>
    <input
      class="h-14 w-90 rounded-3xl bg-color-lightgray px-3.5 text-color-darkblue placeholder-color-gray"
      :autocomplete="props.autocomplete"
      :placeholder="props.placeholder"
      :type="props.type"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>

<style scoped></style>
