<script lang="ts" setup>
import Header from '~/components/widgets/Header.vue'
import { TEAM_MEMBERS as teamMembers } from '~/constants/teamMembers'

const attrs = useAttrs()

const back = attrs.back !== undefined ? (attrs.back as boolean) : true
const email = attrs.email !== undefined ? (attrs.email as string) : ''

useHead({
  meta: [
    {
      name: 'keywords',
      content: 'contributors, project, github, nuxt, design, back end, front end, devops, NuxtJS'
    },
    {
      name: 'authors',
      content:
        'Anastasia Varfolomeeva, Arsen Galiev, Asqar Arslanov, Ilya-Linh Nguen, Kirill Efimovich, Maksim Malov, Evgenii Bortsov, Sarmat Lutfullin'
    }
  ],
  link: teamMembers.map((member) => ({
    rel: 'author',
    href: member.link,
    title: member.name
  }))
})
</script>

<template>
  <div class="mx-32 flex flex-col gap-4">
    <Header :back="back" :email="email">
      <slot name="header" />
    </Header>

    <main class="flex w-full flex-col items-center gap-6 pb-16">
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-color-base text-color-text;
}

.u-button {
  @apply bg-color-accent;
}
</style>
