<script lang="ts" setup>
import { ref, watch } from 'vue'
import Header from '~/components/widgets/Header.vue'
import SwitchBox from '~/components/widgets/SwitchBox.vue'
import ElectiveInput from '~/components/shared/ElectiveInput.vue'
import SavedNotification from '~/components/shared/SavedNotification.vue'

interface ElectiveData {
  shortName: string
  instructorMail: string
  minOverall: number
  maxOverall: number
  lowGroup: number
  highGroup: number
  maxGroup: number
  description: string
}

const currentElective = ref<string | null>(null)
const electiveData = ref<{ [key: string]: ElectiveData }>({})
const notificationOkVisible = ref(false)
const notificationOkMessage = ref('')

const handleElectiveChange = (elective: string) => {
  currentElective.value = elective
}

const shortName = ref('')
const instructorMail = ref('')
const minOverall = ref()
const maxOverall = ref()
const lowGroup = ref()
const highGroup = ref()
const maxGroup = ref()
const description = ref('')

const handleSave = () => {
  if (currentElective.value) {
    electiveData.value[currentElective.value] = {
      shortName: shortName.value,
      instructorMail: instructorMail.value,
      minOverall: minOverall.value,
      maxOverall: maxOverall.value,
      lowGroup: lowGroup.value,
      highGroup: highGroup.value,
      maxGroup: maxGroup.value,
      description: description.value
    }
    notificationOkMessage.value = 'Saved successfully'
    notificationOkVisible.value = true
    currentElective.value = null
    setTimeout(() => {
      notificationOkVisible.value = false
    }, 2000)
  }
}

watch(currentElective, (newElective) => {
  if (newElective && electiveData.value[newElective]) {
    const data = electiveData.value[newElective]
    shortName.value = data.shortName
    instructorMail.value = data.instructorMail
    minOverall.value = data.minOverall
    maxOverall.value = data.maxOverall
    lowGroup.value = data.lowGroup
    highGroup.value = data.highGroup
    maxGroup.value = data.maxGroup
    description.value = data.description
  } else {
    shortName.value = ''
    instructorMail.value = ''
    minOverall.value = null
    maxOverall.value = null
    lowGroup.value = null
    highGroup.value = null
    maxGroup.value = null
    description.value = ''
  }
})
</script>

<template>
  <Header />
  <main class="flex flex-col items-center gap-12">
    <h1 class="primary">Electives</h1>
    <div class="flex w-full flex-row items-center justify-around">
      <div class="flex min-h-full w-1/2 flex-col items-center self-stretch">
        <SwitchBox @elective-change="handleElectiveChange" />
      </div>
      <div class="flex min-h-full w-1/2 flex-col items-center gap-4 self-start">
        <h2 class="text-3xl font-semibold">Options</h2>
        <div class="flex min-h-full w-full flex-row items-center justify-around self-stretch">
          <div class="flex h-full w-1/2 flex-col items-center gap-6">
            <ElectiveInput
              v-model="shortName"
              headerName="Course short name"
              placeholder="Short name"
            />
            <ElectiveInput
              v-model="instructorMail"
              autocomplete="email"
              headerName="Instructor’s mail"
              placeholder="Instructor’s mail"
              type="email"
            />
            <ElectiveInput
              v-model="minOverall"
              headerName="Minimum overall students"
              placeholder="Min overall"
              type="number"
            />
            <ElectiveInput
              v-model="maxOverall"
              headerName="Maximum overall students"
              placeholder="Max overall"
              type="number"
            />
            <ElectiveInput
              v-model="lowGroup"
              headerName="Lower number students in group"
              placeholder="Low in group"
              type="number"
            />
            <ElectiveInput
              v-model="highGroup"
              headerName="Higher number students in group"
              placeholder="High in group"
              type="number"
            />
            <ElectiveInput
              v-model="maxGroup"
              headerName="Maximum students in group"
              placeholder="Enter maximum"
              type="number"
            />
          </div>
          <div class="flex min-h-full w-1/2 flex-col items-start justify-around self-stretch">
            <h3 class="text-xl font-semibold">Course description</h3>
            <textarea
              class="placeholder-p-4 h-full w-full resize-none rounded-3xl bg-color-lightgray p-4 text-color-darkblue placeholder-color-gray"
              v-model="description"
              placeholder="Description"
              type="text"
            />
          </div>
        </div>
        <UButton class="rounded-xl bg-color-inno-green px-6 py-2.5 text-lg" @click="handleSave">
          Save changes
        </UButton>
      </div>
      <SavedNotification :message="notificationOkMessage" :visible="notificationOkVisible" />
    </div>
  </main>
</template>

<style scoped></style>
