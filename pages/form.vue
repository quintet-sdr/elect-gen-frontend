<script lang="ts" setup>
import draggable from 'vuedraggable'

const electives = reactive([
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
])

const dragOptions = () => ({ animation: 200 })
</script>

<template>
  <draggable v-bind="dragOptions" :list="electives">
    <template #item="{ element }">
      <div>{{ element }}</div>
    </template>
  </draggable>
</template>
