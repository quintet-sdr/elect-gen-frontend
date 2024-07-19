<script lang="ts" setup>
import { ref, reactive, defineEmits, defineProps, watch } from 'vue'
import ElectiveButton from '~/components/shared/Elective/ElectiveButton.vue'

let techElectives = reactive([
  'Advanced Programming in C/C++',
  'Architecture of Computing Devices',
  'Branding & Marketing in IT industry',
  'Cross-platform Mobile Development with Flutter',
  'Front-end Web Development',
  'Introduction to 3D Modeling',
  'Introduction to Electronic and Logic Circuits',
  'Introduction to Mechanical Engineering',
  'Introduction to Robotics Operating System: Basics, Motion, and Vision',
  'Lambda-Calculus, Algebra, Machinery and Logic for Formal Program Semantics',
  'Real-Time Scheduling Theory',
])

let humElectives = reactive([
  'Personal Efficiency skills',
  'Psychology of IT-specialist',
  'Introduction to Career Development for IT-specialist',
  'UX/UI Design',
  'Public Speaking in Business',
  'Reading skills for IT specialist',
  'Career and Leadership',
  'Applied Economics: Introduction to IT Entrepreneurship',
  'Tech Startup Design',
  'Basics of Product management',
  'Design Thinking for IT-specialist'
])

const props = defineProps<{ disabled: boolean }>();
const emit = defineEmits(['elective-change']);

const currentBlock = ref('block1');
const activeElective = ref<string | null>(null);

const newElectiveName = ref('');
const newElectiveEditing = ref(false);

const handleElectiveClick = (elective: string) => {
  if (!props.disabled) {
    activeElective.value = elective
    emit('elective-change', elective)
  }
}

const startEditingNewElective = () => {
  newElectiveEditing.value = true;
}

const addNewElective = () => {
  if (newElectiveName.value.trim() !== '') {
    if (currentBlock.value === 'block1') {
      techElectives.push(newElectiveName.value.trim());
    } else if (currentBlock.value === 'block2') {
      humElectives.push(newElectiveName.value.trim());
    }
    newElectiveName.value = '';
    newElectiveEditing.value = false;
  }
}

const handleBlur = () => {
  addNewElective();
}

const handleKeyup = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    addNewElective();
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
          currentBlock === 'block1' ? 'bg-color-inno-green text-color-lightgray' : 'bg-transparent'
        ]"
        @click="currentBlock = 'block1'"
      >
        Tech
      </button>
      <button
        :class="[
          'mx-2 rounded px-4 py-2 font-semibold',
          currentBlock === 'block2' ? 'bg-color-inno-green text-color-lightgray' : 'bg-transparent'
        ]"
        @click="currentBlock = 'block2'"
      >
        Hum
      </button>
    </div>
    <div class="flex w-full h-full flex-col items-center justify-center">
      <div class="flex flex-col items-center gap-8 text-center" v-if="currentBlock === 'block1'">
        <div class="flex flex-col items-center justify-around gap-4">
          <ElectiveButton
            v-for="elective in techElectives"
            :active="elective === activeElective"
            :disabled="props.disabled"
            :key="elective"
            :name="elective"
            @click="handleElectiveClick(elective)"
          />
        </div>
        <div class="flex w-90 items-center justify-center rounded-2xl border-2 bg-gray-300 text-2xl font-semibold text-color-darkblue hover:border-color-inno-green">
          <template v-if="newElectiveEditing">
            <input
              v-model="newElectiveName"
              @blur="handleBlur"
              @keyup="handleKeyup"
              class="bg-transparent border-none focus:outline-none w-full text-center"
              placeholder="Enter course name"
            />
          </template>
          <template v-else>
            <button class="w-full"
              @click="startEditingNewElective">
              +
            </button>
          </template>
        </div>
      </div>
      <div class="flex flex-col items-center gap-8 text-center" v-if="currentBlock === 'block2'">
        <div class="flex flex-col items-center justify-around gap-4">
          <ElectiveButton
            v-for="elective in humElectives"
            :active="elective === activeElective"
            :disabled="props.disabled"
            :key="elective"
            :name="elective"
            @click="handleElectiveClick(elective)"
          />
        </div>
        <div class="flex w-90 items-center justify-center rounded-2xl border-2 bg-gray-300 text-2xl font-semibold text-color-darkblue hover:border-color-inno-green">
          <template v-if="newElectiveEditing">
            <input
              v-model="newElectiveName"
              @blur="handleBlur"
              @keyup="handleKeyup"
              class="bg-transparent border-none focus:outline-none w-full text-center"
              placeholder="Enter course name"
            />
          </template>
          <template v-else>
            <button @click="startEditingNewElective">
              +
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
