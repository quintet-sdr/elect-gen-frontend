<script lang="ts" setup>
import Header from "~/components/widgets/Header.vue";
import SwitchBox from "~/components/widgets/SwitchBox.vue";
</script>

<template>
  <Header/>
  <main class="flex flex-col items-center gap-12">
    <h1 class="text-4xl font-semibold text-color-inno-green">Electives</h1>
    <div class="flex flex-row items-center justify-around w-full">
      <div class="flex flex-col items-center w-1/2">
        <SwitchBox/>
      </div>
      <div class="w-1/2"></div>
    </div>
  </main>
</template>

<style scoped></style>
