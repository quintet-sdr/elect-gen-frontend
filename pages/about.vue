<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Logo from '~/components/shared/Logo/Logo.vue'
import Member from '~/components/shared/Member.vue'
import { TEAM_MEMBERS as teamMembers } from '~/constants/teamMembers'

const router = useRouter()

useHead({
  title: 'Elect.Gen - Project contributors',
  meta: [{ name: 'description', content: 'Here you can view contributors of the project' }]
})
definePageMeta({
  layout: false
})
function navigateToLogin() {
  router.push('/login')
}
</script>

<template>
  <header class="h-30 h-25 grid w-40 w-full grid-cols-3 items-center p-6">
    <a class="h-20 w-40 p-8" href="https://innopolis.university/">
      <Logo />
    </a>
    <button
      class="bg-accent-500 hover:bg-accent-600 absolute right-6 top-20 rounded rounded-xl bg-color-accent p-8 px-4 py-2 text-white transition duration-300 hover:opacity-75"
      @click="navigateToLogin"
    >
      Login
    </button>
  </header>
  <main class="flex flex-col p-6 desktop:mx-8 desktop:flex-row">
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

<style scoped>
@media (min-width: 1024px) {
  .desktop\:w-1\/3 {
    width: 33.333333%;
  }
  .desktop\:w-2\/3 {
    width: 66.666667%;
  }
  .desktop\:flex-row {
    flex-direction: row;
  }
  .desktop\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .desktop\:pt-28 {
    padding-top: 7rem;
  }
  .desktop\:mx-8 {
    margin-left: 15rem;
  }
}
</style>
