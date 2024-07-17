<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { techElectives, humElectives } from '~/constants/electivesList.js'
import ElectiveButton from '~/components/shared/ElectiveButton.vue'

const currentBlock = ref('block1')
const emit = defineEmits(['elective-change'])

const handleElectiveClick = (elective: string) => {
  emit('elective-change', elective)
}
</script>

<template>
  <div class="flex min-h-full w-full flex-col items-center gap-4">
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
    <div class="flex w-full flex-col items-center justify-center">
      <div class="text-center" v-if="currentBlock === 'block1'">
        <div class="p-3" v-for="elective in techElectives" :key="elective">
          <ElectiveButton :name="elective" @click="handleElectiveClick(elective)" />
        </div>
      </div>
      <div class="text-center" v-if="currentBlock === 'block2'">
        <div class="p-3" v-for="elective in humElectives" :key="elective">
          <ElectiveButton :name="elective" @click="handleElectiveClick(elective)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
