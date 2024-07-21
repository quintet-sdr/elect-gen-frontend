<script lang="ts" setup>
import Header from '~/components/widgets/Header.vue'
</script>

<template>
  <Header />
  <main class="flex flex-col items-center gap-12">
    <h1 class="text-5xl font-semibold">Elective Name</h1>
    <div class="flex h-full w-1/2 flex-col items-start justify-around gap-4">
      <h2 class="text-3xl font-semibold">Course Description</h2>
      <div
        class="placeholder-p-4 bg-color-lightgray text-color-darkblue placeholder-color-gray h-80 w-full overflow-y-scroll rounded-3xl px-4 py-4"
      >
        <!-- an example -->
        <p>
          This course aims to provide students with an introduction to the essential principles of
          contemporary front-end web development, alongside a brief overview of its historical
          evolution and technological advancements. Drawing from established industry standards,
          this course equips students with the requisite skills to pursue professional
          opportunities. Emphasizing breadth over depth, the course covers a diverse range of
          topics, rather than concentrating on a singular area of focus such as JavaScript.
        </p>
        <p>
          Throughout this course, students will acquire the ability to develop their own personal
          website through a series of assignments. Furthermore, they will undertake a course project
          that combines all of the technologies and best practices studied during the program.
        </p>
        <p>Topics covered:</p>
        <ul class="list-disc pl-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Bundlers and modern toolings</li>
          <li>Frameworks: Svelte(Kit), React</li>
          <li>System/code architectures</li>
          <li>Code quality</li>
        </ul>
      </div>
    </div>
    <div class="flex w-1/2 flex-row items-center gap-8">
      <div class="flex w-1/2 flex-col items-start justify-around gap-4">
        <h3 class="text-xl font-semibold">Prerequisites</h3>
        <div
          class="placeholder-p-4 bg-color-lightgray text-color-darkblue placeholder-color-gray h-40 w-full overflow-y-scroll rounded-3xl px-4 py-4"
        >
          <!-- an example -->
          Knowledge in any general-purpose programming language (Java, C++, Python, …)
        </div>
      </div>
      <div class="flex w-1/2 flex-col items-start justify-around gap-4">
        <h3 class="text-xl font-semibold">Duration</h3>
        <div
          class="placeholder-p-4 bg-color-lightgray text-color-darkblue placeholder-color-gray h-40 w-full overflow-y-scroll rounded-3xl px-4 py-4"
        >
          <!-- an example -->
          01.06 - 01.08
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
