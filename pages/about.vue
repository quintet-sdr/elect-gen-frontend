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

function configClick() {
  navigateTo('/config')
}

function distributeClick() {
  navigateTo('/distribute')
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <header class="h-15 grid w-full grid-cols-3 items-center px-44">
      <a class="h-20 w-40 p-4" href="https://innopolis.university/">
        <Logo />
      </a>
    </header>
    <main class="flex flex-col p-6 desktop:mx-8 desktop:flex-row">
      <div class="flex w-full flex-col gap-8 pr-8 desktop:w-1/3">
        <article>
          <h1 class="mb-4 text-5xl font-bold">Elect.Gen</h1>
          <p class="text-lg">
            The Student Course Allocation System is designed to efficiently allocate students to
            courses based on their preferences and priorities. It supports both a basic allocation
            algorithm and a more complex genetic algorithm to optimize the distribution of students
            across available courses.
          </p>
        </article>
        <div>
          <h3 class="mb-4 text-3xl font-semibold">Distributor video</h3>
          <iframe
            class="mx-auto w-full max-w-lg rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            frameborder="0"
            height="315"
            src=""
            title="YouTube video player"
            width="560"
          />
        </div>
        <div>
          <h3 class="mb-4 text-3xl font-semibold">Student video</h3>
          <iframe
            class="mx-auto w-full max-w-lg rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            frameborder="0"
            height="315"
            src=""
            title="YouTube video player"
            width="560"
          />
        </div>
      </div>
      <div class="flex w-full flex-col items-center justify-center gap-16 desktop:w-2/3">
        <div class="flex w-max flex-col items-center gap-4 text-center">
          <h2 class="text-3xl font-semibold">Select an action</h2>
          <UButton class="w-32 justify-center" @click="configClick">Configure</UButton>
          <UButton class="w-32 justify-center" @click="distributeClick">Distribute</UButton>
        </div>
        <div class="flex flex-col items-center gap-4">
          <h2 class="text-3xl font-semibold">Authors</h2>
          <div class="flex w-full flex-row justify-center">
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
        </div>
      </div>
    </main>
  </div>
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
    margin-left: 10rem;
  }
  .desktop\:mx-7 {
    margin-right: 25rem;
  }
  .desktop\:mx-9 {
    margin-left: 100rem;
  }
}
</style>
