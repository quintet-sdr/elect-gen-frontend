<script lang="ts" setup>
interface Props {
  text: string
  level: number
}

const props = withDefaults(defineProps<Props>(), {
  level: 1
})
</script>

<template>
  <h1 class="text-7xl font-bold" v-if="props.level === 1">
    {{ props.text }}
  </h1>
  <h2 class="text-4xl font-bold" v-if="props.level === 2">
    {{ props.text }}
  </h2>
</template>
