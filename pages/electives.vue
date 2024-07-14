<script lang="ts" setup>
import { electives } from '~/constants/electivesList.js'
</script>

<template>
  <Header />
  <main class="flex flex-col items-center gap-20">
    <h1 class="primary">Electives</h1>
    <div
      class="w-ffullull flex min-h-90 flex-col items-center gap-4 rounded-3xl border-color-lightgray dark:border-b-white"
    >
      <div class="" v-for="(elective, index) in electives" :key="index">
        <ElectiveEdit :name="elective" />
      </div>
      <button
        class="flex w-width-100 items-center justify-center rounded-xl bg-gray-300 px-3 py-2 text-base font-medium hover:border-color-darkblue dark:text-color-darkblue"
      >
        +
      </button>
    </div>
  </main>
</template>

<style scoped></style>
