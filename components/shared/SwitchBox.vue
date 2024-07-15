<script setup lang="ts">
import { ref } from 'vue';

const currentBlock = ref('block1');
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="mb-4">
      <button
        @click="currentBlock = 'block1'"
        :class="['px-4 py-2 mx-2 rounded', currentBlock === 'block1' ? 'bg-blue-500 text-white' : 'bg-gray-200']"
      >
        Block 1
      </button>
      <button
        @click="currentBlock = 'block2'"
        :class="['px-4 py-2 mx-2 rounded', currentBlock === 'block2' ? 'bg-blue-500 text-white' : 'bg-gray-200']"
      >
        Block 2
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
