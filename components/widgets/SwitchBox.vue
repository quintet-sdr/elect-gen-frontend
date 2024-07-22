<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import ElectiveButton from '~/components/shared/Elective/ElectiveButton.vue'
import * as api from '~/server/utils/api'
import type { Course } from '~/server/utils/schemas'

const techElectives = reactive<string[]>([])
const humElectives = reactive<string[]>([])

const props = defineProps<{ disabled: boolean }>()
const emit = defineEmits(['elective-change', 'course-selected', 'toggle-delete-mode'])

const currentBlock = ref('block1')
const activeElective = ref<string | null>(null)
const deletingMode = ref(false)
const newElectiveName = ref('')
const newElectiveEditing = ref(false)

const loadCourses = async () => {
  try {
    const techCourses = await api.getCourses('tech')
    const humCourses = await api.getCourses('hum')

    techElectives.push(...techCourses.map((course: Course) => course.full_name))
    humElectives.push(...humCourses.map((course: Course) => course.full_name))
  } catch (error) {
    console.error('Error loading courses:', error)
  }
}

const handleElectiveClick = async (elective: string) => {
  if (deletingMode.value) {
    deleteElective(elective)
  } else if (!props.disabled) {
    activeElective.value = elective
    emit('elective-change', elective)

    const type = currentBlock.value === 'block1' ? 'tech' : 'hum'
    const courses = await api.getCourses(type)
    const course = courses.find((c) => c.full_name === elective)

    if (course) {
      emit('course-selected', course)
    }
  }
}

const startEditingNewElective = () => {
  newElectiveEditing.value = true
}

const addNewElective = () => {
  if (newElectiveName.value.trim() !== '') {
    if (currentBlock.value === 'block1') {
      techElectives.push(newElectiveName.value.trim())
    } else if (currentBlock.value === 'block2') {
      humElectives.push(newElectiveName.value.trim())
    }
    newElectiveName.value = ''
    newElectiveEditing.value = false
  }
}

const handleBlur = () => {
  addNewElective()
}

const handleKeyup = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    addNewElective()
  }
}

const toggleDeleteMode = () => {
  deletingMode.value = !deletingMode.value
  emit('toggle-delete-mode', deletingMode.value)
}

const deleteElective = (elective: string) => {
  if (currentBlock.value === 'block1') {
    const index = techElectives.indexOf(elective)
    if (index > -1) {
      techElectives.splice(index, 1)
    }
  } else if (currentBlock.value === 'block2') {
    const index = humElectives.indexOf(elective)
    if (index > -1) {
      humElectives.splice(index, 1)
    }
  }
  deletingMode.value = false
  emit('toggle-delete-mode', deletingMode.value)
}

onMounted(() => {
  loadCourses()
})

watch(
  () => props.disabled,
  (newVal) => {
    if (newVal) {
      activeElective.value = null
    }
  }
)
</script>
Z

<template>
  <div class="flex min-h-full w-full flex-col items-center gap-4">
    <div class="mb-4">
      <button
        :class="[
          'mx-2 rounded px-4 py-2 font-semibold',
          currentBlock === 'block1' ? 'bg-color-accent text-color-base' : 'bg-transparent'
        ]"
        @click="currentBlock = 'block1'"
      >
        Tech
      </button>
      <button
        :class="[
          'mx-2 rounded px-4 py-2 font-semibold',
          currentBlock === 'block2' ? 'bg-color-accent text-color-base' : 'bg-transparent'
        ]"
        @click="currentBlock = 'block2'"
      >
        Hum
      </button>
    </div>
    <div class="hide-scrollbar max-h-screen overflow-y-scroll">
      <div class="flex flex-col items-center justify-center">
        <div
          class="flex flex-col items-center justify-center gap-8 text-center"
          v-if="currentBlock === 'block1'"
        >
          <div class="flex flex-col items-center justify-around gap-4">
            <ElectiveButton
              v-for="elective in techElectives"
              :active="elective === activeElective"
              :disabled="props.disabled"
              :key="elective"
              :name="elective"
              @click="handleElectiveClick(elective)"
            />
            <div v-if="techElectives.length === 0">
              <p>Connecting to database...</p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center gap-8 text-center"
          v-if="currentBlock === 'block2'"
        >
          <div class="flex flex-col items-center justify-around gap-4">
            <ElectiveButton
              v-for="elective in humElectives"
              :active="elective === activeElective"
              :disabled="props.disabled"
              :key="elective"
              :name="elective"
              @click="handleElectiveClick(elective)"
            />
            <div v-if="humElectives.length === 0">
              <p>Connecting to database...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex max-w-90 flex-col items-center justify-center gap-4">
      <div>
        <template v-if="newElectiveEditing">
          <textarea
            class="placeholder:text-gray w-96 resize-none rounded-2xl border-2 bg-color-surface text-center text-color-dark focus:outline-none dark:placeholder-color-base"
            v-model="newElectiveName"
            @blur="handleBlur"
            @keyup="handleKeyup"
            placeholder="Enter course name"
          />
        </template>
        <template v-else>
          <button
            class="w-90 rounded-2xl border-2 bg-color-surface text-2xl font-semibold text-color-dark hover:bg-color-accent"
            @click="startEditingNewElective"
          >
            +
          </button>
        </template>
      </div>
      <button
        class="w-90 rounded-2xl border-2 bg-color-surface text-2xl font-semibold text-color-dark hover:bg-color-accent"
        @click="toggleDeleteMode"
      >
        {{ deletingMode ? 'Cancel' : '-' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* WebKit */
}
</style>
