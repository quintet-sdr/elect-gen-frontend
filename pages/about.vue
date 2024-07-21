<script lang="ts" setup>
import Member from '~/components/shared/Member.vue'
import Header from '~/components/widgets/Header.vue'
import {teamMembers} from "~/constants/teamMembers";

useHead({
  title: 'Elect.Gen - Project contributors',
  meta: [
    { name: 'description', content: 'Here you can view contributors of the project' },
    { name: 'keywords', content: 'contributors, project, github, nuxt, design, back end, front end, devops' },
    { name: 'authors', content: 'Anastasia Varfolomeeva, Arsen Galiev, Asqar Arslanov, Ilya-Linh Nguen, Kirill Efimovich, Maksim Malov, Evgenii Bortsov, Sarmat Lutfullin' }
  ],
  link: teamMembers.map(member => ({
    rel: 'author',
    href: member.link,
    title: member.name,
  }))
})
</script>

<template>
  <Header />
  <h1 class="p-1 text-5xl font-semibold">Contributors</h1>
  <main class="grid grid-cols-2 tablet:gap-40 desktop:gap-5">
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
    <div class="flex flex-col items-center space-y-8 tablet:pt-28">
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
  </main>
</template>

<style scoped></style>
