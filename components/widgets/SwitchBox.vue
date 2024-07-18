<script lang="ts" setup>
import { ref, defineEmits, defineProps, watch } from 'vue'
import { techElectives, humElectives } from '~/constants/electivesList.js'
import ElectiveButton from '~/components/shared/Elective/ElectiveButton.vue'

const props = defineProps<{ disabled: boolean }>()
const emit = defineEmits(['elective-change'])

const currentBlock = ref('block1')
const activeElective = ref<string | null>(null)

const handleElectiveClick = (elective: string) => {
  if (!props.disabled) {
    activeElective.value = elective
    emit('elective-change', elective)
  }
}

watch(
  () => props.disabled,
  (newVal) => {
    if (newVal) {
      activeElective.value = null
    }
  }
)
</script>

<template>
  <div class="flex min-h-full w-full flex-col items-center gap-4">
    <div class="mb-4">
      <button
        :class="[
          'mx-2 rounded px-4 py-2 font-semibold',
          currentBlock === 'block1' ? 'bg-color-inno-green text-color-lightgray' : 'bg-transparent'
        ]"
        @click="currentBlock = 'block1'"
      >
        Tech
      </button>
      <button
        :class="[
          'mx-2 rounded px-4 py-2 font-semibold',
          currentBlock === 'block2' ? 'bg-color-inno-green text-color-lightgray' : 'bg-transparent'
        ]"
        @click="currentBlock = 'block2'"
      >
        Hum
      </button>
    </div>
    <div class="flex w-full flex-col items-center justify-center">
      <div class="flex flex-col items-center gap-8 text-center" v-if="currentBlock === 'block1'">
        <div class="flex flex-col items-center justify-around gap-4">
          <ElectiveButton
            v-for="elective in techElectives"
            :active="elective === activeElective"
            :disabled="props.disabled"
            :key="elective"
            :name="elective"
            @click="handleElectiveClick(elective)"
          />
        </div>
        <button
          class="flex w-90 items-center justify-center rounded-2xl bg-gray-300 text-2xl font-semibold dark:text-color-darkblue"
        >
          +
        </button>
      </div>
      <div class="flex flex-col items-center gap-8 text-center" v-if="currentBlock === 'block2'">
        <div class="flex flex-col items-center justify-around gap-4">
          <ElectiveButton
            v-for="elective in humElectives"
            :active="elective === activeElective"
            :disabled="props.disabled"
            :key="elective"
            :name="elective"
            @click="handleElectiveClick(elective)"
          />
        </div>
        <button
          class="flex w-90 items-center justify-center rounded-2xl bg-gray-300 text-2xl font-semibold dark:text-color-darkblue"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
