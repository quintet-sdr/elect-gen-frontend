<script setup lang="ts">
import { electives } from '~/constants/electivesList.js';
</script>

<template>
  <Header/>
  <main class="flex flex-col items-center gap-20">
    <h1 class="primary">Electives</h1>
    <div class="flex flex-col items-center gap-4 w-ffullull min-h-90 rounded-3xl border-color-lightgray dark:border-b-white">
      <div
    v-for="(elective, index) in electives"
    :key="index"
     class="">
        <ElectiveEdit :name="elective"/>
    </div>
      <button class="flex justify-center items-center w-width-100 rounded-xl bg-gray-300 px-3 py-2 text-base font-medium dark:text-color-darkblue hover:border-color-darkblue">+</button>
    </div>
  </main>
</template>

<style scoped>

</style>