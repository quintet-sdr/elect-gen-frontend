<script lang="ts" setup>
import { electives } from '~/constants/electivesList.js'
import Header from "~/components/widgets/Header.vue";
import SwitchBox from "~/components/shared/SwitchBox.vue";
</script>

<template>
  <Header/>
  <main class="flex flex-col items-center justify-around">
    <h1 class="primary">Electives</h1>
    <div class="flex flex-row items-center justify-around">
      <div class="flex flex-col items-center w-1/2">
          <SwitchBox/>
      </div>

      <div class="w-1/2"></div>
    </div>
  </main>
</template>

<style scoped></style>
