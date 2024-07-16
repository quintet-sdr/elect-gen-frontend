<script lang="ts" setup>
import { techElectives, humElectives } from '~/constants/electivesList.js'
import { ref } from 'vue'
import ElectiveButton from '~/components/shared/ElectiveButton.vue'

const currentBlock = ref('block1')
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <div class="mb-4">
      <button
        :class="[
          'mx-2 rounded px-4 py-2 font-semibold',
          currentBlock === 'block1' ? 'bg-color-gray text-color-darkblue' : 'bg-transparent'
        ]"
        @click="currentBlock = 'block1'"
      >
        Tech
      </button>
      <button
        :class="[
          'mx-2 rounded px-4 py-2 font-semibold',
          currentBlock === 'block2' ? 'bg-color-gray text-color-darkblue' : 'bg-transparent'
        ]"
        @click="currentBlock = 'block2'"
      >
        Hum
      </button>
    </div>
    <!--    рамка только для визуала тестового-->
    <div
      class="flex w-full flex-col items-center justify-center rounded-xl border-4 border-color-gray py-4"
    >
      <div class="text-center" v-if="currentBlock === 'block1'">
        <div class="p-3" v-for="elective in techElectives" :key="elective">
          <ElectiveButton :name="elective" />
        </div>
      </div>
      <div class="text-center" v-if="currentBlock === 'block2'">
        <div class="p-3" v-for="elective in humElectives" :key="elective">
          <ElectiveButton :name="elective" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
