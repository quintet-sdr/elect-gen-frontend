<script lang="ts" setup>
interface Props {
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <h1 class="text-7xl font-bold">
    {{ props.text }}
  </h1>
</template>
