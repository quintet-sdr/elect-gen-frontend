<script lang="ts" setup>
import { defineEmits, defineProps, ref, watch } from 'vue'
import type { CourseCodename } from '~/server/utils/schemas'

interface Props {
  headerName: string
  id: string
  placeholder?: string
  type?: string
  autocomplete?: string
  options: string[]
  modelValue: string | number | string[] | CourseCodename
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    value.value = newValue
  }
)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let inputValue = target.value

  if (props.type === 'number') {
    inputValue = inputValue.replace(/[^0-9]/g, '')
    const numericValue = parseInt(inputValue, 10)
    if (!isNaN(numericValue) && numericValue > 0) {
      value.value = numericValue
    } else {
      value.value = ''
    }
  } else {
    value.value = inputValue
  }
  emit('update:modelValue', value.value)
}
</script>

<template>
  <div class="flex flex-col items-start justify-around">
    <label class="tablet:text-l font-semibold laptop:text-xl" :for="props.id">{{
      props.headerName
    }}</label>
    <input
      class="placeholder-color-gray-100 h-14 rounded-3xl bg-color-surface px-3.5 text-color-dark tablet:w-72 laptop:w-90 dark:placeholder-color-base"
      :autocomplete="props.autocomplete"
      :id="props.id"
      :list="'datalist-' + props.id"
      :name="props.id"
      :placeholder="props.placeholder"
      :type="props.type"
      :value="value"
      @input="handleInput"
    />
    <datalist :id="'datalist-' + props.id">
      <option v-for="option in props.options" :key="option" :value="option" />
    </datalist>
  </div>
</template>

<style scoped></style>
