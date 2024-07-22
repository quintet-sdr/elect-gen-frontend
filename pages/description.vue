<script lang="ts" setup>
import Header from '~/components/widgets/Header.vue'

useHead({
  title: 'Elective description',
  meta: [{ name: 'description', content: 'Useful information about elective' }]
})
</script>

<template>
  <Header />
  <main class="flex flex-col items-center tablet:gap-10 laptop:gap-12">
    <h1 class="font-semibold tablet:text-4xl laptop:text-5xl">{{ $t('description.name') }}</h1>
    <div class="flex h-full flex-col items-start justify-around gap-4 tablet:w-full laptop:w-1/2">
      <h2 class="font-semibold tablet:text-xl laptop:text-3xl">
        {{ $t('description.description') }}
      </h2>
      <div
        class="placeholder-p-4 bg-color-lightgray text-color-darkblue placeholder-color-gray w-full overflow-y-scroll rounded-3xl px-4 py-4 tablet:h-full laptop:h-80"
      >
        <!-- an example  -->
        <p>
          {{ $t('description.p1') }}
        </p>
        <p>
          {{ $t('description.p2') }}
        </p>
        <p>{{ $t('description.topics') }}</p>
        <ul class="list-disc pl-4">
          <li>{{ $t('description.html') }}</li>
          <li>{{ $t('description.css') }}</li>
          <li>{{ $t('description.js') }}</li>
          <li>{{ $t('description.ts') }}</li>
          <li>{{ $t('description.toolings') }}</li>
          <li>{{ $t('description.fr') }}</li>
          <li>{{ $t('description.arch') }}</li>
          <li>{{ $t('description.qual') }}</li>
        </ul>
      </div>
    </div>
    <div class="flex items-center gap-8 tablet:w-full tablet:flex-col laptop:w-1/2 laptop:flex-row">
      <div class="flex flex-col items-start justify-around gap-4 tablet:w-full laptop:w-1/2">
        <h3 class="tablet:text-l font-semibold laptop:text-xl">{{ $t('description.pr') }}</h3>
        <div
          class="placeholder-p-4 bg-color-lightgray text-color-darkblue placeholder-color-gray w-full overflow-y-scroll rounded-3xl px-4 py-4 tablet:h-full laptop:h-80"
        >
          <!-- an example -->
          {{ $t('description.know') }}
        </div>
      </div>
      <div class="flex flex-col items-start justify-around gap-4 tablet:w-full laptop:w-1/2">
        <h3 class="tablet:text-l font-semibold laptop:text-xl">{{ $t('description.dur') }}</h3>
        <div
          class="placeholder-p-4 bg-color-lightgray text-color-darkblue placeholder-color-gray w-full overflow-y-scroll rounded-3xl px-4 py-4 tablet:h-full laptop:h-80"
        >
          <!-- an example -->
          01.06 - 01.08
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
