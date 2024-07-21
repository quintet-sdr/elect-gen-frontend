<script lang="ts" setup>
import { ref, watch } from 'vue'
import ElectiveInput from '~/components/shared/Elective/ElectiveInput.vue'
import ClearedNotification from '~/components/shared/Notification/ClearedNotification.vue'
import SavedNotification from '~/components/shared/Notification/SavedNotification.vue'
import Heading from '~/components/shared/Text/Heading.vue'
import SwitchBox from '~/components/widgets/SwitchBox.vue'

interface ElectiveData {
  courseName: string
  shortName: string
  instructorMail: string
  minOverall: number | null
  maxOverall: number | null
  lowGroup: number | null
  highGroup: number | null
  maxGroup: number | null
  description: string
  courseLevel: string
}

const currentElective = ref<string | null>(null)
const electiveData = ref<{ [key: string]: ElectiveData }>({})
const notificationOkVisible = ref(false)
const notificationOkMessage = ref('')
const notificationClearVisible = ref(false)
const notificationClearMessage = ref('')
const notificationDeleteVisible = ref(false)

const switchBoxDisabled = ref(false)

const handleElectiveChange = (elective: string) => {
  currentElective.value = elective
  courseName.value = elective
}

const courseName = ref('')
const shortName = ref('')
const instructorName = ref('')
const minOverall = ref<number | null>(null)
const maxOverall = ref<number | null>(null)
const lowGroup = ref<number | null>(null)
const highGroup = ref<number | null>(null)
const maxGroup = ref<number | null>(null)
const description = ref('')
const courseLevel = ref('')

const handleSave = () => {
  if (currentElective.value) {
    electiveData.value[currentElective.value] = {
      courseName: courseName.value,
      shortName: shortName.value,
      instructorMail: instructorName.value,
      minOverall: minOverall.value,
      maxOverall: maxOverall.value,
      lowGroup: lowGroup.value,
      highGroup: highGroup.value,
      maxGroup: maxGroup.value,
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
    courseName.value = ''
    shortName.value = ''
    instructorName.value = ''
    minOverall.value = null
    maxOverall.value = null
    lowGroup.value = null
    highGroup.value = null
    maxGroup.value = null
    description.value = ''
    courseLevel.value = ''

    electiveData.value[currentElective.value] = {
      courseName: '',
      shortName: '',
      instructorMail: '',
      minOverall: 0,
      maxOverall: 0,
      lowGroup: 0,
      highGroup: 0,
      maxGroup: 0,
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

// Обработчик для переключения режима удаления
const handleToggleDeleteMode = (isDeleting: boolean) => {
  notificationDeleteVisible.value = isDeleting
}

watch(currentElective, (newElective) => {
  if (newElective && electiveData.value[newElective]) {
    const data = electiveData.value[newElective]
    courseName.value = data.courseName
    shortName.value = data.shortName
    instructorName.value = data.instructorMail
    minOverall.value = data.minOverall
    maxOverall.value = data.maxOverall
    lowGroup.value = data.lowGroup
    highGroup.value = data.highGroup
    maxGroup.value = data.maxGroup
    description.value = data.description
    courseLevel.value = data.courseLevel
  } else {
    courseName.value = ''
    shortName.value = ''
    instructorName.value = ''
    minOverall.value = null
    maxOverall.value = null
    lowGroup.value = null
    highGroup.value = null
    maxGroup.value = null
    description.value = ''
    courseLevel.value = ''
  }
})
</script>

<template>
  <main
    class="flex min-w-full flex-col items-center gap-12 tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
  >
    <Heading text="Electives" />
    <div class="laptop:flex-row flex h-auto w-full items-center justify-around tablet:flex-col">
      <div class="laptop:w-1/2 flex h-full flex-col items-center self-stretch tablet:w-full">
        <SwitchBox
          :disabled="switchBoxDisabled"
          @elective-change="handleElectiveChange"
          @toggle-delete-mode="handleToggleDeleteMode"
        />
      </div>
      <div
        class="laptop:w-1/2 flex min-h-full flex-col items-center gap-8 self-start tablet:w-full tablet:pt-20"
      >
        <h2 class="text-3xl font-semibold">Options</h2>
        <form
          class="flex min-h-full w-full flex-col items-center gap-4 self-stretch"
          @submit.prevent="handleSave"
        >
          <div class="flex min-h-full w-full flex-col items-center gap-6 self-stretch">
            <div class="flex flex-col items-center gap-6">
              <ElectiveInput
                id="full-name"
                v-model="courseName"
                headerName="Course full name"
                placeholder="Full name"
              />
              <ElectiveInput
                id="short-name"
                v-model="shortName"
                headerName="Course short name"
                placeholder="Short name"
              />
              <div class="flex flex-col items-start justify-around">
                <label class="text-xl font-semibold" for="course-level">Course level</label>
                <select
                  class="h-14 w-90 rounded-3xl bg-color-surface px-3.5 text-color-dark placeholder:text-gray-100"
                  id="course-level"
                  v-model="courseLevel"
                >
                  <option class="bg-color-surface" disabled value="">Select course level</option>
                  <option class="bg-color-surface" value="First year bachelors">
                    First year bachelors
                  </option>
                  <option class="bg-color-surface" value="Second year bachelors">
                    Second year bachelors
                  </option>
                  <option class="bg-color-surface" value="First and Second year bachelors">
                    First and Second year bachelors
                  </option>
                </select>
              </div>
              <ElectiveInput
                id="instructor-name"
                v-model="instructorName"
                autocomplete="email"
                headerName="Instructor’s name"
                placeholder="Instructor’s name"
              />
              <ElectiveInput
                id="min-overall"
                v-model="minOverall"
                headerName="Minimum overall students"
                placeholder="Min overall"
                type="number"
              />
              <ElectiveInputtablet:max-w-screen-tablet
                id="max-overall"
                v-model="maxOverall"
                headerName="Maximum overall students"
                desktop:max-w-screen-desktop
                placeholder="Max overall"
                type="number"
              />
              <ElectiveInput
                id="low-group"
                v-model="lowGroup"
                headerName="Lower number students in group"
                placeholder="Low in group"
                type="number"
              />
              <ElectiveInput
                id="high-group"
                v-model="highGroup"
                headerName="Higher number students in group"
                placeholder="High in group"
                type="number"
              />
              <ElectiveInput
                id="max-group"
                v-model="maxGroup"
                headerName="Maximum students in course"
                placeholder="Enter maximum"
                type="number"
              />
            </div>
            <div class="flex min-w-90 flex-col items-center justify-around">
              <label class="text-xl font-semibold" for="description">Course description</label>
              <textarea
                class="placeholder-p-4 placeholder-color-gray h-full w-full resize-none rounded-3xl bg-color-surface p-4 text-color-dark dark:placeholder-color-base"
                id="description"
                v-model="description"
                placeholder="Description"
                type="text"
              />
            </div>
          </div>
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
