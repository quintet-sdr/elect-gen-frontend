<script lang="ts" setup>
import Header from '~/components/widgets/Header.vue';
</script>

<template>
    <Header />
    <main class="flex flex-col items-center gap-12">
        <h1 class="primary">Elective Name</h1>
        <div class="flex h-full w-1/2 flex-col items-start justify-around">
            <h2 class="text-3xl font-semibold">Course Description</h2>
            <div class="placeholder-p-4 h-90 w-full rounded-3xl bg-color-lightgray text-color-darkblue placeholder-color-gray">Description</div>
        </div>
        <div class="flex w-1/2 flex-row items-center gap-4">
            <div class="flex w-1/2 flex-col items-start justify-around">
                <h3 class="text-xl font-semibold">Prerequisites</h3>
                <div class="placeholder-p-4 h-48 w-full rounded-3xl bg-color-lightgray text-color-darkblue placeholder-color-gray">Description</div>
            </div>
            <div class="flex w-1/2 flex-col items-start justify-around">
                <h3 class="text-xl font-semibold">Duration</h3>
                <div class="placeholder-p-4 h-48 w-full rounded-3xl bg-color-lightgray text-color-darkblue placeholder-color-gray">Description</div>
            </div>
        </div>
  </main>
</template>

<style scoped></style>
