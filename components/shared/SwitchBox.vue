<script setup lang="ts">
import { ref } from 'vue';

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
    <div class="flex justify-center items-center border border-gray-300 p-4 w-full max-w-md">
      <div v-if="currentBlock === 'block1'" class="text-center">This is Block 1</div>
      <div v-if="currentBlock === 'block2'" class="text-center">This is Block 2</div>
    </div>
  </div>
</template>

<style scoped>

</style>
