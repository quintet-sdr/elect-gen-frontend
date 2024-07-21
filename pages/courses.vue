<script lang="ts" setup>
import { ref, watch } from 'vue'
import ElectiveInput from '~/components/shared/Elective/ElectiveInput.vue'
import ClearedNotification from '~/components/shared/Notification/ClearedNotification.vue'
import SavedNotification from '~/components/shared/Notification/SavedNotification.vue'
import Heading from '~/components/shared/Text/Heading.vue'
import SwitchBox from '~/components/widgets/SwitchBox.vue'
import * as api from '~/server/utils/api'

const form = ref(
  {} as {
    codename?: CourseCodename
    type?: 'tech' | 'hum'
    full_name?: string
    short_name?: string
    description?: string
    instructor?: string
    min_overall?: number
    max_overall?: number
    low_in_group?: number
    high_in_group?: number
    max_in_group?: number
    groups?: CourseGroup[]
  }
)

const currentElective = ref<string | undefined>()
const notificationOkVisible = ref(false)
const notificationOkMessage = ref('')
const notificationClearVisible = ref(false)
const notificationClearMessage = ref('')
const notificationDeleteVisible = ref(false)

const switchBoxDisabled = ref(false)

const handleElectiveChange = (elective: string) => {
  currentElective.value = elective
  full_name.value = elective
}

const full_name = ref('')
const short_name = ref('')
const instructor = ref('')
const min_overall = ref<number | undefined>()
const max_overall = ref<number | undefined>()
const low_in_group = ref<number | undefined>()
const high_in_group = ref<number | undefined>()
const max_in_group = ref<number | undefined>()
const description = ref('')
const courseLevel = ref('')

const handleSave = () => {
  if (currentElective.value) {
    electiveData.value[currentElective.value] = {
      full_name: full_name.value,
      short_name: short_name.value,
      instructor: instructor.value,
      min_overall: min_overall.value,
      max_overall: max_overall.value,
      low_in_group: low_in_group.value,
      high_in_group: high_in_group.value,
      max_in_group: max_in_group.value,
      description: description.value,
      courseLevel: courseLevel.value
    }
    notificationOkMessage.value = 'Saved successfully'
    notificationOkVisible.value = true
    switchBoxDisabled.value = true
    setTimeout(() => {
      notificationOkVisible.value = false
      switchBoxDisabled.value = false
    }, 2000)
  }
}

const handleClear = () => {
  if (currentElective.value) {
    full_name.value = ''
    short_name.value = ''
    instructor.value = ''
    min_overall.value = null
    max_overall.value = null
    low_in_group.value = null
    high_in_group.value = null
    max_in_group.value = null
    description.value = ''
    courseLevel.value = ''

    electiveData.value[currentElective.value] = {
      full_name: '',
      short_name: '',
      instructor: '',
      min_overall: 0,
      max_overall: 0,
      low_in_group: 0,
      high_in_group: 0,
      max_in_group: 0,
      description: '',
      courseLevel: ''
    }

    notificationClearMessage.value = 'Cleared'
    notificationClearVisible.value = true
    switchBoxDisabled.value = true
    setTimeout(() => {
      notificationClearVisible.value = false
      switchBoxDisabled.value = false
    }, 2000)
  }
}

const handleToggleDeleteMode = (isDeleting: boolean) => {
  notificationDeleteVisible.value = isDeleting
}

const uploadCourses = async () => {
  api.newCourse(form)

  const courses = computed(() => ({
    codename: electiveData.value.short_name,
    type: 'tech',
    full_name: electiveData.value.full_name,
    short_name: electiveData.value.short_name,
    description: electiveData.value.description,
    instructor: electiveData.value.instructor,
    min_overall: electiveData.value.min_overall,
    max_overall: electiveData.value.max_overall,
    low_in_group: electiveData.value.low_in_group,
    high_in_group: electiveData.value.high_in_group,
    max_in_group: electiveData.value.max_in_group,
    groups: defineGroups(electiveData.value.courseLevel)
  }))

  for (const course of courses) {
    try {
      await api.newCourse(course)
    } catch (error) {
      console.error('Failed to upload course:', course, error)
    }
  }
}

watch(currentElective, (_) => (form.value = {}))
</script>

<template>
  <main class="flex min-w-full flex-col items-center gap-12">
    {{ form }}

    <Heading text="Electives" />
    <div class="flex h-auto w-full flex-row items-center justify-around">
      <div class="flex h-full w-1/2 flex-col items-center self-stretch">
        <SwitchBox
          :disabled="switchBoxDisabled"
          @elective-change="handleElectiveChange"
          @toggle-delete-mode="handleToggleDeleteMode"
        />
      </div>
      <div class="flex min-h-full w-1/2 flex-col items-center gap-8 self-start">
        <h2 class="text-3xl font-semibold">Options</h2>
        <form
          class="flex min-h-full w-full flex-col items-center gap-4 self-stretch"
          @submit.prevent="handleSave"
        >
          <div class="flex min-h-full w-full flex-col items-center gap-6 self-stretch">
            <div class="flex flex-col items-center gap-6">
              <ElectiveInput
                id="full-name"
                v-model="form.full_name"
                headerName="Course full name"
                placeholder="Full name"
              />
              <ElectiveInput
                id="short-name"
                v-model="form.short_name"
                headerName="Course short name"
                placeholder="Short name"
              />
              <ElectiveInput
                id="groups"
                v-model="form.groups"
                headerName="Course grous"
                placeholder="Groups"
              />
              <ElectiveInput
                id="instructor-name"
                v-model="form.instructor"
                headerName="Instructor’s name"
                placeholder="Instructor’s name"
              />
              <ElectiveInput
                id="min-overall"
                v-model="form.min_overall"
                headerName="Minimum overall students"
                placeholder="Min overall"
                type="number"
              />
              <ElectiveInput
                id="max-overall"
                v-model="form.max_overall"
                headerName="Maximum overall students"
                placeholder="Max overall"
                type="number"
              />
              <ElectiveInput
                id="low-group"
                v-model="form.low_in_group"
                headerName="Lower number students in group"
                placeholder="Low in group"
                type="number"
              />
              <ElectiveInput
                id="high-group"
                v-model="form.high_in_group"
                headerName="Higher number students in group"
                placeholder="High in group"
                type="number"
              />
              <ElectiveInput
                id="max-group"
                v-model="form.max_in_group"
                headerName="Maximum students in course"
                placeholder="Enter maximum"
                type="number"
              />
            </div>
            <div class="flex min-w-90 flex-col items-center justify-around">
              <label class="text-xl font-semibold" for="description"> Course description </label>
              <textarea
                class="placeholder-p-4 placeholder-color-gray h-full w-full resize-none rounded-3xl bg-color-surface p-4 text-color-dark dark:placeholder-color-base"
                id="description"
                v-model="description"
                placeholder="Description"
                type="text"
              />
            </div>
          </div>
          <div class="flex flex-col items-center gap-6">
            <div class="flex flex-row items-center gap-4">
              <button
                class="rounded-xl bg-color-accent px-6 py-2.5 text-lg hover:opacity-75"
                type="submit"
              >
                Save changes
              </button>
              <button
                class="rounded-xl border border-color-text bg-transparent px-6 py-2.5 text-lg hover:opacity-75"
                @click="handleClear"
              >
                Clear fields
              </button>
            </div>
            <button
              class="rounded-xl bg-green-400 px-6 py-2.5 text-lg hover:opacity-75"
              @click="uploadCourses"
              type="submit"
            >
              Upload courses
            </button>
          </div>
        </form>
      </div>
      <SavedNotification :message="notificationOkMessage" :visible="notificationOkVisible" />
      <ClearedNotification
        :message="notificationClearMessage"
        :visible="notificationClearVisible"
      />
      <ClearedNotification
        :message="'Delete mode active. Click to the elective you want delete'"
        :visible="notificationDeleteVisible"
      />
    </div>
  </main>
</template>

<style scoped></style>
