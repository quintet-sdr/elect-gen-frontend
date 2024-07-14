<script lang="ts" setup>
import draggable from 'vuedraggable'
import { electives } from '~/constants/electivesList.js'

const dragOptions = () => ({ animation: 200 })
</script>

<template>
  <draggable
    class="flex h-48 w-320 flex-row flex-wrap gap-3 overflow-scroll rounded-3xl border-2 border-solid p-6"
    v-bind="dragOptions"
    :list="electives"
  >
    <template #item="{ element }">
      <Elective :name="element" description="test" />
    </template>
  </draggable>
</template>

<style scoped></style>
