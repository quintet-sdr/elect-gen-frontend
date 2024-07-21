<script lang="ts" setup>
import Heading from '~/components/shared/Text/Heading.vue'
import * as api from '~/server/utils/api'
import type { Course } from '~/server/utils/schemas'

definePageMeta({ layout: false })

const NUM_OF_COURSES: number = 5

async function getSortedCourses(): Promise<void> {
  sortedCourses.value = (await api.getCourses())
    ?.filter((it) => it.type == ['tech', 'hum'][selectedTab.value])
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
  return (
    !selected.value.includes(undefined) &&
    validateEmail() &&
    email.value.length > 0 &&
    typeof gpa.value === 'number'
  )
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

function selectTab(value: number): void {
  router.replace({
    query: { type: items[value].type }
  })

  for (let i = 0; i < NUM_OF_COURSES; i += 1) {
    selected.value[i] = undefined
  }
}

const selectedTab = computed({
  get() {
    const index = items.findIndex((item) => item.type === route.query.type)
    if (index === -1) {
      return 0
    }

    ;(async () => await getSortedCourses())()

    return index
  },
  set: selectTab
})

function validateEmail(): boolean {
  if (email.value.length === 0) {
    return true
  }

  const validSymbols =
    "1234567890-+qwfpbjluyarstgmneioxcdvzkh.QWFPBJLUYARSTGMNEIOXCDVZKH!#$%&'*+-/=?^_`{|}~"

  for (const symbol of email.value) {
    if (!validSymbols.includes(symbol)) {
      return false
    }
  }

  if ([email.value[0], email.value[email.value.length - 1]].includes('.')) {
    return false
  }

  if (email.value.includes('..')) {
    return false
  }

  return true
}

function emailColor(): string | undefined {
  if (validateEmail()) {
    return undefined
  } else {
    return 'red'
  }
}

const email = ref('')

const gpa = ref<number>()

async function submit(): Promise<void> {
  await api.postStudent({
    email: email.value,
    gpa: gpa.value!,
    priority_1: selected.value[0]!.codename,
    priority_2: selected.value[1]!.codename,
    priority_3: selected.value[2]!.codename,
    priority_4: selected.value[3]!.codename,
    priority_5: selected.value[4]!.codename
  })
}

onMounted(() => selectTab(0))
</script>

<template>
  <NuxtLayout :back="true" name="default">
    <template #header>
      <UTabs class="w-32" v-model="selectedTab" :items="items" />
    </template>

    <Heading class="text-color-accent" :level="2" text="Select your priorities" />

    <div />

    <form class="flex w-72 flex-col items-center gap-4" @submit.prevent="submit">
      <div class="flex w-full flex-col self-start">
        <UFormGroup label="Email">
          <div class="flex flex-row items-center gap-1">
            <UInput
              class="w-48 min-w-48"
              v-model="email"
              :color="emailColor()"
              placeholder="Local-part"
            />
            <span
              class="font-medium text-color-overlay"
              v-if="validateEmail() && email.length === 0"
            >
              @innopolis.university
            </span>
            <span class="font-medium text-color-accent" v-if="validateEmail() && email.length > 0">
              @innopolis.university
            </span>
          </div>
        </UFormGroup>

        <span class="text-color-error font-medium" v-if="!validateEmail()">
          Enter a valid local-part.
        </span>
      </div>

      <UFormGroup class="w-48 self-start" label="GPA">
        <UInput v-model="gpa" :max="5.0" :min="2.0" placeholder="Number" step="any" type="number" />
      </UFormGroup>

      <div />

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
        class="w-full rounded-lg bg-color-accent py-1.5 font-medium enabled:text-white disabled:cursor-not-allowed disabled:bg-color-surface disabled:text-color-overlay"
        :disabled="!enabled()"
        type="submit"
      >
        Submit
      </button>
    </form>
  </NuxtLayout>
</template>
