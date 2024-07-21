<script lang="ts" setup>
import Header from '~/components/widgets/Header.vue'
</script>

<template>
  <Header />
  <main class="flex flex-col items-center tablet:gap-10 laptop:gap-12">
    <h1 class="font-semibold tablet:text-4xl laptop:text-5xl">Elective Name</h1>
    <div class="flex h-full flex-col items-start justify-around gap-4 tablet:w-full laptop:w-1/2">
      <h2 class="font-semibold tablet:text-xl laptop:text-3xl">Course Description</h2>
      <div
        class="placeholder-p-4 bg-color-lightgray text-color-darkblue placeholder-color-gray w-full overflow-y-scroll rounded-3xl px-4 py-4 tablet:h-full laptop:h-80"
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
    <div class="flex items-center gap-8 tablet:w-full tablet:flex-col laptop:w-1/2 laptop:flex-row">
      <div class="flex flex-col items-start justify-around gap-4 tablet:w-full laptop:w-1/2">
        <h3 class="tablet:text-l font-semibold laptop:text-xl">Prerequisites</h3>
        <div
          class="placeholder-p-4 bg-color-lightgray text-color-darkblue placeholder-color-gray w-full overflow-y-scroll rounded-3xl px-4 py-4 tablet:h-full laptop:h-80"
        >
          <!-- an example -->
          Knowledge in any general-purpose programming language (Java, C++, Python, …)
        </div>
      </div>
      <div class="flex flex-col items-start justify-around gap-4 tablet:w-full laptop:w-1/2">
        <h3 class="tablet:text-l font-semibold laptop:text-xl">Duration</h3>
        <div
          class="placeholder-p-4 bg-color-lightgray text-color-darkblue placeholder-color-gray w-full overflow-y-scroll rounded-3xl px-4 py-4 tablet:h-full laptop:h-80"
        >
          <!-- an example -->
          01.06 - 01.08
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
