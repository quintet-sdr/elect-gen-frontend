<script lang="ts" setup>
const electives = [
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
  'Real-Time Scheduling Theory'
]

const selected: Ref<string[]> = ref([])

const available = electives.map((it) => ({ label: it, disabled: selected.value.includes(it) }))
</script>

<template>
  <div v-for="_ in 5"><USelectMenu :options="available" /></div>
</template>
