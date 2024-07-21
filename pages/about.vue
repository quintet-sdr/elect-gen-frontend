<script lang="ts" setup>
import Member from '~/components/shared/Member.vue'
import Header from '~/components/widgets/Header.vue'
import { TEAM_MEMBERS as teamMembers } from '~/constants/teamMembers'

useHead({
  title: 'Elect.Gen - Project contributors',
  meta: [{ name: 'description', content: 'Here you can view contributors of the project' }]
})
</script>

<template>
  <Header />
  <main class="flex flex-col p-8 desktop:flex-row">
    <div class="w-full pr-8 desktop:w-1/3">
      <h1 class="mb-4 text-5xl font-semibold">Elect.Gen</h1>
      <p class="text-lg">
        The Student Course Allocation System is designed to efficiently allocate students to courses
        based on their preferences and priorities. It supports both a basic allocation algorithm and
        a more complex genetic algorithm to optimize the distribution of students across available
        courses.
      </p>
    </div>
    <div class="flex w-full justify-center desktop:w-2/3">
      <div class="grid grid-cols-1 gap-8 desktop:grid-cols-2">
        <div class="flex flex-col items-center space-y-8">
          <h1 class="mb-4 text-5xl font-semibold">Contributors</h1>
          <Member
            :alt="teamMembers[3].alt"
            :image="teamMembers[3].image"
            :link="teamMembers[3].link"
            :name="teamMembers[3].name"
            :role="teamMembers[3].role"
          />
          <Member
            :alt="teamMembers[4].alt"
            :image="teamMembers[4].image"
            :link="teamMembers[4].link"
            :name="teamMembers[4].name"
            :role="teamMembers[4].role"
          />
          <Member
            :alt="teamMembers[0].alt"
            :image="teamMembers[0].image"
            :link="teamMembers[0].link"
            :name="teamMembers[0].name"
            :role="teamMembers[0].role"
          />
          <Member
            :alt="teamMembers[2].alt"
            :image="teamMembers[2].image"
            :link="teamMembers[2].link"
            :name="teamMembers[2].name"
            :role="teamMembers[2].role"
          />
        </div>
        <div class="flex flex-col items-center space-y-8 desktop:pt-28">
          <Member
            :alt="teamMembers[5].alt"
            :image="teamMembers[5].image"
            :link="teamMembers[5].link"
            :name="teamMembers[5].name"
            :role="teamMembers[5].role"
          />
          <Member
            :alt="teamMembers[6].alt"
            :image="teamMembers[6].image"
            :link="teamMembers[6].link"
            :name="teamMembers[6].name"
            :role="teamMembers[6].role"
          />
          <Member
            :alt="teamMembers[7].alt"
            :image="teamMembers[7].image"
            :link="teamMembers[7].link"
            :name="teamMembers[7].name"
            :role="teamMembers[7].role"
          />
          <Member
            :alt="teamMembers[1].alt"
            :image="teamMembers[1].image"
            :link="teamMembers[1].link"
            :name="teamMembers[1].name"
            :role="teamMembers[1].role"
          />
        </div>
      </div>
    </div>
  </main>
</template>
