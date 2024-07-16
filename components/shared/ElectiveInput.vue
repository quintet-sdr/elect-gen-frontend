<script lang="ts" setup>
const props = defineProps<{
  headerName: string
  placeholder?: string
  type?: string
  autocomplete?: string
}>()
</script>

<template>
  <div class="flex flex-col items-start justify-around">
    <h3 class="text-xl font-semibold">{{ props.headerName }}</h3>
    <input
      class="h-14 w-90 rounded-3xl bg-color-lightgray text-color-darkblue placeholder-color-gray"
      :autocomplete="props.autocomplete"
      :placeholder="props.placeholder"
      :type="props.type"
    />
  </div>
</template>

<style scoped>
input::placeholder {
  text-align: justify;
}
</style>
