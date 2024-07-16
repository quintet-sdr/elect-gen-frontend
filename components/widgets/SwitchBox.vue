<script setup lang="ts">
import { techElectives, humElectives } from '~/constants/electivesList.js'
import { ref } from 'vue';
import ElectiveButton from "~/components/shared/ElectiveButton.vue";

const currentBlock = ref('block1');
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <div class="mb-4">
      <button
        @click="currentBlock = 'block1'"
        :class="['px-4 py-2 mx-2 rounded font-semibold', currentBlock === 'block1' ? 'bg-color-gray text-color-darkblue' : 'bg-transparent']"
      >
        Tech
      </button>
      <button
        @click="currentBlock = 'block2'"
        :class="['px-4 py-2 mx-2 rounded font-semibold', currentBlock === 'block2' ? 'bg-color-gray text-color-darkblue' : 'bg-transparent']"
      >
        Hum
      </button>
    </div>
<!--    рамка только для визуала тестового-->
    <div class="flex flex-col justify-center items-center border-4 border-color-gray rounded-xl py-4 w-full">
      <div v-if="currentBlock === 'block1'" class="text-center">
        <div v-for="elective in techElectives" :key="elective" class="p-3">
          <ElectiveButton :name="elective"/>
        </div>
      </div>
      <div v-if="currentBlock === 'block2'" class="text-center">
        <div v-for="elective in humElectives" :key="elective" class="p-3">
          <ElectiveButton :name="elective"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
