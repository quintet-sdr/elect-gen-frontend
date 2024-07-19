<script lang="ts" setup>
import * as api from '~/server/utils/api'
import type { Course } from '~/server/utils/schemas'

// import { techElectives } from '~/constants/electivesList.js'
// import Elective from '~/components/shared/Elective/Elective.vue'

const NUM_OF_COURSES: number = 5

const courses = ref(
  (await api.getCourses())?.sort((a, b) => a.short_name.localeCompare(b.short_name))
)

const selected = ref<(Course | undefined)[]>([])
for (let _ = 0; _ < NUM_OF_COURSES; _ += 1) {
  selected.value.push(undefined)
}

const enabled = computed(() => !selected.value.includes(undefined))

function except(it: Course, i: number): boolean {
  const ids: (number | undefined)[] = []
  for (let n = 0; n < NUM_OF_COURSES; n += 1) {
    if (n === i) {
      continue
    }
    ids.push(selected.value[n]?.id)
  }

  return !ids.includes(it.id)
}

const filteredCourses = ref<ComputedRef<Course[] | undefined>[]>([])
for (let i = 0; i < NUM_OF_COURSES; i += 1) {
  filteredCourses.value.push(computed(() => courses.value?.filter((it) => except(it, i))))
}

const fc = ref([{ id: 1, contents: 'hey' }])
</script>

<template>
  <div v-for="i in 5">
    <USelectMenu
      v-model="selected[i - 1]"
      :options="filteredCourses[i - 1].value"
      :search-attributes="['full_name', 'short_name']"
      by="id"
      option-attribute="short_name"
      searchable
    />
  </div>

  {{ enabled }}
</template>
