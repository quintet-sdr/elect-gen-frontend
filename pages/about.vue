<script lang="ts" setup>
import avatar1 from '~/assets/images/avatar1.jpg'
import avatar2 from '~/assets/images/avatar2.jpg'
import avatar3 from '~/assets/images/avatar3.jpg'
import avatar4 from '~/assets/images/avatar4.jpg'
import avatar5 from '~/assets/images/avatar5.png'
import avatar6 from '~/assets/images/avatar6.jpg'
import avatar7 from '~/assets/images/avatar7.jpg'
import avatar8 from '~/assets/images/avatar8.jpg'
import Member from '~/components/shared/Member.vue'
import Header from '~/components/widgets/Header.vue'

const teamMembers = [
  {
    image: avatar1,
    alt: 'evgenii-photo',
    link: 'https://github.com/ebortsov',
    name: 'Evgenii Bortsov',
    role: 'UX/UI Designer'
  },
  {
    image: avatar2,
    alt: 'anastasia-photo',
    link: 'https://github.com/acecution',
    name: 'Anastasia Varfolomeeva',
    role: 'Front-end'
  },
  {
    image: avatar3,
    alt: 'kirill-photo',
    link: 'https://github.com/lanebo1',
    name: 'Kirill Efimovich',
    role: 'Algorithm Developer'
  },
  {
    image: avatar4,
    alt: 'ilya-linh-sdr-photo',
    link: 'https://github.com/Pickpusha',
    name: 'Ilya-Linh Nguen',
    role: 'DevOps'
  },
  {
    image: avatar5,
    alt: 'maxim-photo',
    link: 'https://github.com/newspec',
    name: 'Maxim Malov',
    role: 'Algorithm Developer'
  },
  {
    image: avatar6,
    alt: 'arsen-photo',
    link: 'https://github.com/projacktor',
    name: 'Arsen Galiev',
    role: 'Full-stack'
  },
  {
    image: avatar7,
    alt: 'asqar-photo',
    link: 'https://github.com/asqarslanov',
    name: 'Asqar Arslanov',
    role: 'Full-stack'
  },
  {
    image: avatar8,
    alt: 'sarmat-photo',
    link: 'https://github.com/1sarmatt',
    name: 'Sarmat Lutfullin',
    role: 'Front-end'
  }
]
</script>

<template>
  <Header />
  <h1 class="p-1 text-5xl font-semibold">Contributors</h1>
  <main class="tablet:gap-40 desktop:gap-5 grid grid-cols-2">
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
    <div class="tablet:pt-28 flex flex-col items-center space-y-8">
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
