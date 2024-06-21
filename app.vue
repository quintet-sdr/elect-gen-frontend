<script setup lang="ts">
const email = ref('a.potyomckin@innopolis.ru')
</script>

<template>
  <header class="flex flex-row justify-between">
    <Icon name="local:innopolis-university" class="size-8" />
    <UDropdown>{{ email }}</UDropdown>
  </header>
  <NuxtPage />
</template>
