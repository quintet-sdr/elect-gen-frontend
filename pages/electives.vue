<script lang="ts" setup>
import Header from '~/components/widgets/Header.vue'
import SwitchBox from '~/components/widgets/SwitchBox.vue'
import ElectiveInput from '~/components/shared/ElectiveInput.vue'
</script>

<template>
  <Header />
  <main class="flex flex-col items-center gap-12">
    <h1 class="primary">Electives</h1>
    <div class="flex w-full flex-row items-center justify-around">
      <div class="flex w-1/2 flex-col items-center">
        <SwitchBox />
      </div>
      <div class="flex w-1/2 flex-col items-center gap-4">
        <h2 class="text-3xl font-semibold">Options</h2>
        <div class="flex w-full flex-row items-center justify-around">
          <div class="flex h-full w-1/2 flex-col items-center gap-4">
            <ElectiveInput headerName="Course short name" placeholder="Short name" />
            <ElectiveInput
              autocomplete="email"
              headerName="Instructor’s mail"
              placeholder="Instructor’s mail"
              type="email"
            />
            <ElectiveInput headerName="Minimum overall students" placeholder="Min overall" />
            <ElectiveInput headerName="Maximum overall students" placeholder="Max overall" />
            <ElectiveInput headerName="Lower number students in group" placeholder="Low in group" />
            <ElectiveInput
              headerName="Higher number students in group"
              placeholder="High in group"
            />
            <ElectiveInput headerName="Maximum students in group" placeholder="Enter maximum" />
          </div>
          <div class="flex h-full w-1/2 flex-col items-start justify-around">
            <h3 class="text-xl font-semibold">Course description</h3>
            <div class="flex h-full w-full">
              <textarea
                class="placeholder-p-4 h-full w-full resize-none rounded-3xl bg-color-lightgray p-4 text-color-darkblue placeholder-color-gray"
                placeholder="Description"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
