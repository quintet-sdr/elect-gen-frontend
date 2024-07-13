<script setup lang="ts">
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
</script>

<template>
  <Header/>
  <main class="flex flex-col items-center gap-20">
    <h1 class="primary">Electives</h1>
    <div class="flex flex-col items-center gap-4 w-full min-h-90 rounded-3xl border-color-lightgray dark:border-b-white">
      <div
    v-for="(elective, index) in electives"
    :key="index"
     class="">
        <ElectiveEdit :name="elective"/>
    </div>
      <button class="flex justify-center items-center w-160 rounded-xl bg-gray-300 px-3 py-2 text-base font-medium dark:text-color-darkblue hover:border-color-darkblue">+</button>
    </div>
  </main>
</template>

<style scoped>

</style>
