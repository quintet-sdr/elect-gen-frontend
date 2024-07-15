<script setup lang="ts">
import { electives } from '~/constants/electivesList.js'
import { ref } from 'vue';
import Elective from "~/components/shared/Elective.vue";

const currentBlock = ref('block1');
</script>

<template>
  <div class="flex flex-col items-center">
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
    <div class="flex justify-center items-center border-2 border-color-gray rounded-xl p-4 w-full max-w-md">
      <div v-if="currentBlock === 'block1'" class="text-center">
        <div v-for="elective in electives" :key="elective" class="p-3">
          <Elective :name="elective"/>
        </div>
      </div>
      <div v-if="currentBlock === 'block2'" class="text-center"><Elective name="2222"/></div>
    </div>
  </div>
</template>

<style scoped>

</style>
