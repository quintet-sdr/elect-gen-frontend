<script lang="ts" setup>
interface Props {
  headerName: string
  placeholder?: string
  type?: string
  autocomplete?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-start justify-around">
    <h3 class="text-xl font-semibold">{{ props.headerName }}</h3>
    <input
      class="h-14 w-90 rounded-3xl bg-color-lightgray pl-3.5 text-color-darkblue placeholder-color-gray"
      :autocomplete="props.autocomplete"
      :placeholder="props.placeholder"
      :type="props.type"
    />
  </div>
</template>

<style scoped></style>
