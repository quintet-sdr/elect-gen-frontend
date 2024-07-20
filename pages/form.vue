<script lang="ts" setup>
import Heading from '~/components/shared/Text/Heading.vue'
import * as api from '~/server/utils/api'
import type { Course } from '~/server/utils/schemas'

definePageMeta({ layout: false })

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

const items = [
  { label: 'Tech', type: 'tech' },
  { label: 'Hum', type: 'hum' }
]

const route = useRoute()
const router = useRouter()

function selectTab(value: number): void {
  router.replace({
    query: { type: items[value].type }
  })
}

const selectedTab = computed({
  get() {
    const index = items.findIndex((item) => item.type === route.query.type)
    if (index === -1) {
      return 0
    }
    return index
  },
  set: selectTab
})

async function submit(): Promise<void> {}

onMounted(() => selectTab(0))
</script>

<template>
  <NuxtLayout name="default">
    <template #header>
      <UTabs class="w-32" v-model="selectedTab" :items="items" />
    </template>

    <Heading class="text-color-accent" :level="2" text="Select your priorities" />

    <div />

    <form class="flex w-72 flex-col items-center gap-4" @submit.prevent="submit">
      <UFormGroup class="w-full" v-for="i in 5" :label="`Priority ${i}`" required>
        <USelectMenu
          v-model="selected[i - 1]"
          :options="filteredCourses[i - 1].value"
          :search-attributes="['full_name', 'short_name']"
          by="id"
          option-attribute="short_name"
          searchable
        />
      </UFormGroup>

      <div />

      <button
        class="w-full rounded-lg bg-color-accent py-1.5 font-medium enabled:text-white disabled:cursor-not-allowed disabled:bg-color-surface disabled:text-color-overlay"
        :disabled="!enabled"
        type="submit"
      >
        Submit
      </button>
    </form>
  </NuxtLayout>
</template>
