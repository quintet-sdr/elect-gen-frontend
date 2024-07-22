<script lang="ts" setup>
import Heading from '~/components/shared/Text/Heading.vue'
import * as api from '~/server/utils/api'
import type { Course, Student } from '~/server/utils/schemas'

definePageMeta({ layout: false })

const store = useStore()

const student = ref<Student>()
const coursesRaw = ref<Course[]>()

async function updateStudent(elective: 'tech' | 'hum'): Promise<void> {
  student.value = await api.getStudent(store.email, elective)
  coursesRaw.value = await api.getCourses(elective)
}

useHead({
  title: 'Select Electives - Elect.Gen',
  meta: [{ name: 'description', content: 'Fill out the form with your five priorities.' }]
})

const NUM_OF_COURSES: number = 5

async function setSortedCourses(): Promise<void> {
  sortedCourses.value = coursesRaw.value
    ?.filter((it) => student.value?.available.includes(it.codename))
    .sort((a, b) => a.short_name.localeCompare(b.short_name))
}

const sortedCourses = ref<Course[]>()

const courses = computed(() => {
  if (sortedCourses.value === undefined) {
    return undefined
  }

  const result = []

  for (const [id, course] of sortedCourses.value.entries()) {
    result.push({
      id,
      ...course
    })
  }

  return result
})

interface CourseWithId extends Course {
  id: number
}

const selected = ref<(CourseWithId | undefined)[]>([])
for (let _ = 0; _ < NUM_OF_COURSES; _ += 1) {
  selected.value.push(undefined)
}

function enabled(): boolean {
  return !selected.value.includes(undefined)
}

function except(it: CourseWithId, i: number): boolean {
  const ids: (number | undefined)[] = []
  for (let n = 0; n < NUM_OF_COURSES; n += 1) {
    if (n === i) {
      continue
    }
    ids.push(selected.value[n]?.id)
  }

  return !ids.includes(it.id)
}

const filteredCourses = ref<ComputedRef<CourseWithId[] | undefined>[]>([])
for (let i = 0; i < NUM_OF_COURSES; i += 1) {
  filteredCourses.value.push(computed(() => courses.value?.filter((it) => except(it, i))))
}

const items = [
  { label: 'Tech', type: 'tech' },
  { label: 'Hum', type: 'hum' }
]

const route = useRoute()
const router = useRouter()

const selectedTab = computed({
  get() {
    const index = items.findIndex((item) => item.type === route.query.type)
    if (index === -1) {
      return 0
    }

    ;(async () => await setSortedCourses())()

    return index
  },
  set: selectTab
})

async function submit(): Promise<void> {
  api.postStudents(
    {
      available: student.value!.available,
      completed: student.value!.completed,
      email: store.email,
      gpa: student.value!.gpa,
      group: student.value!.group,
      priority_1: selected.value[0]!.codename,
      priority_2: selected.value[1]!.codename,
      priority_3: selected.value[2]!.codename,
      priority_4: selected.value[3]!.codename,
      priority_5: selected.value[4]!.codename
    },
    route.query.type as 'tech' | 'hum'
  )

  for (let i = 0; i < NUM_OF_COURSES; i += 1) {
    selected.value[i] = undefined
  }
}

function selectTab(value: number): void {
  router.replace({
    query: { type: items[value].type }
  })

  for (let i = 0; i < NUM_OF_COURSES; i += 1) {
    selected.value[i] = undefined
  }

  ;(async () => await updateStudent(items[value].type as 'tech' | 'hum'))()
}

onMounted(() => selectTab(0))
</script>

<template>
  <NuxtLayout :back="true" :email="store.email" name="default">
    <template #header>
      <UTabs class="w-32" v-model="selectedTab" :items="items" />
    </template>

    <Heading class="text-color-accent" :level="2" text="Select your priorities" />

    <div />

    <form class="flex w-72 flex-col items-center gap-4" @submit.prevent="submit">
      <div class="flex w-full flex-col gap-4">
        <UFormGroup class="w-full" v-for="i in 5" :label="`Priority ${i}`" required>
          <USelectMenu
            v-model="selected[i - 1]"
            :options="filteredCourses[i - 1].value"
            :search-attributes="['full_name', 'short_name']"
            by="id"
            option-attribute="short_name"
            placeholder="Elective…"
            searchable
          />
        </UFormGroup>

        <div />

        <button
          class="w-full rounded-lg bg-color-accent py-1.5 font-medium hover:opacity-75 enabled:text-white disabled:cursor-not-allowed disabled:bg-color-surface disabled:text-color-overlay"
          :disabled="!enabled()"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </NuxtLayout>
</template>
