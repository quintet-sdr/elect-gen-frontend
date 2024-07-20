<script lang="ts" setup>
import Member from '~/components/shared/Member.vue'
import Header from '~/components/widgets/Header.vue'
</script>

<template>
  <Header />
  <main>
    <div class="relative h-full w-full pl-5 pt-20">
      <div class="absolute mt-[10rem] h-[8vw] w-[8vw] flex-col items-center">
        <Member
          alt="evgenii-photo"
          image="~/assets/images/avatar1.jpg"
          link="https://github.com/ebortsov"
          name="Evgenii Bortsov"
          role="UX/UI Designer"
        />
      </div>
      <div class="absolute ml-[90rem] mt-[10rem] h-[8vw] w-[8vw] flex-col items-center">
        <Member
          alt="anastasia-photo"
          image="~/assets/images/avatar2.jpg"
          link="https://github.com/acecution"
          name="Anastasia Varfolomeeva"
          role="Front-end"
        />
      </div>
      <div class="absolute ml-[45rem] mt-[10rem] h-[8vw] w-[8vw] flex-col items-center">
        <Member
          alt="kirill-photo"
          image="~/assets/images/avatar3.jpg"
          link="https://github.com/lanebo1"
          name="Kirill Efimovich"
          role="Algorithm Developer"
        />
      </div>
      <div class="absolute ml-[25rem] h-[8vw] w-[8vw] flex-col items-center">
        <Member
          alt="ilya-linh-sdr-photo"
          image="~/assets/images/avatar4.jpg"
          link="https://github.com/Pickpusha"
          name="Ilya-Linh Nguen"
          role="DevOps"
        />
      </div>
      <div class="absolute ml-[65rem] h-[8vw] w-[8vw] flex-col items-center">
        <Member
          alt="maxim-photo"
          image="~/assets/images/avatar5.png"
          link="https://github.com/newspec"
          name="Maxim Malov"
          role="Algorithm Developer"
        />
      </div>
      <div class="absolute ml-[25rem] mt-[25rem] h-[8vw] w-[8vw] flex-col items-center">
        <Member
          alt="arsen-photo"
          image="~/assets/images/avatar6.jpg"
          link="https://github.com/projacktor"
          name="Arsen Galiev"
          role="Full-stack"
        />
      </div>
      <div class="absolute ml-[65rem] mt-[25rem] h-[8vw] w-[8vw] flex-col items-center">
        <Member
          alt="asqar-photo"
          image="~/assets/images/avatar7.jpg"
          link="https://github.com/asqarslanov"
          name="Asqar Arslanov"
          role="Full-stack"
        />
      </div>
      <div class="absolute ml-[45rem] mt-[35rem] h-[8vw] w-[8vw] flex-col items-center">
        <Member
          alt="sarmat-photo"
          image="~/assets/images/avatar8.jpg"
          link="https://github.com/1sarmatt"
          name="Sarmat Lutfullin"
          role="Front-end"
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
