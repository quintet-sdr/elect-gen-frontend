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
          <ElectiveButton
            :active="elective === activeElective"
            :disabled="props.disabled"
            :name="elective"
            @click="handleElectiveClick(elective)"
          />
        </div>
      </div>
      <div class="text-center" v-if="currentBlock === 'block2'">
        <div class="p-3" v-for="elective in humElectives" :key="elective">
          <ElectiveButton
            :active="elective === activeElective"
            :disabled="props.disabled"
            :name="elective"
            @click="handleElectiveClick(elective)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
