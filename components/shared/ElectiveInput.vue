<script setup lang="ts">
const props = defineProps<{
  headerName: string,
  placeholder?: string,
  type?: string,
  autocomplete?: string
}>()
</script>

<template>
   <div class="flex flex-col items-start justify-around">
     <h3 class="text-xl font-semibold">{{ props.headerName }}</h3>
     <input :type="props.type"
            :placeholder="props.placeholder"
            :autocomplete="props.autocomplete"
            class="bg-color-lightgray rounded-3xl text-color-darkblue placeholder-color-gray w-90 h-14"/>
   </div>
</template>

<style scoped>

</style>
ElectivesInput
