<script lang="ts" setup>
import Header from "~/components/widgets/Header.vue";
import SwitchBox from "~/components/widgets/SwitchBox.vue";
import ElectiveInput from "~/components/shared/ElectiveInput.vue";
</script>

<template>
  <Header/>w
  <main class="flex flex-col items-center gap-12">
    <h1 class="text-4xl font-semibold text-color-inno-green">Electives</h1>
    <div class="flex flex-row items-center justify-around w-full">
      <div class="flex flex-col items-center w-1/2">
        <SwitchBox/>
      </div>
      <div class="w-1/2 flex flex-col items-center gap-4">
        <h2 class="text-3xl font-semibold">Options</h2>
        <div class="flex flex-row items-center justify-around">
          <div class="flex flex-col items-center gap-4 w-1/2">
            <ElectiveInput headerName="Course short name" placeholder="Short name"/>
            <ElectiveInput headerName="Instructor’s mail" placeholder="Instructor’s mail" type="email" autocomplete="email"/>
            <ElectiveInput headerName="Minimum overall students" placeholder="Min overall"/>
            <ElectiveInput headerName="Maximum overall students" placeholder="Max overall"/>
            <ElectiveInput headerName="Lower number students in group" placeholder="Low in group"/>
            <ElectiveInput headerName="Higher number students in group" placeholder="High in group"/>
            <ElectiveInput headerName="Maximum students in group" placeholder="Enter maximum"/>
          </div>
          <div class="flex flex-col items-start justify-around w-1/2 h-full">
            <h3 class="text-xl font-semibold">Course description</h3>
            <textarea placeholder="Description"
                   type="text"
            class="bg-color-lightgray rounded-3xl text-color-darkblue placeholder-color-gray w-90 h-full"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped></style>
