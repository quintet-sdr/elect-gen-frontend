<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Heading from '~/components/shared/Text/Heading.vue'

const store = useStore()

const isLoading = ref(true)
const downloadAnchorRef = ref<HTMLAnchorElement | null>(null)

const fetchDistributions = async () => {
  try {
    const response = await store.distributions
  } catch (error) {
    console.error('Ошибка при выполнении запроса', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchDistributions()
})
</script>

<template>
  <main class="flex">
    <div
      class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-color-base bg-opacity-80"
      v-if="isLoading"
    >
      <Heading :level="2" text="Loading..." />
      <div
        class="h-12 w-12 animate-spin rounded-full border-8 border-t-8 border-gray-200 border-t-color-accent"
      ></div>
    </div>
    <div class="flex min-h-screen flex-col items-center justify-center gap-8" v-else>
      <Heading text="We’re all done!" />
      <p
        class="text-color-darkblue dark:text-color-lightgray tablet:text-m mb-4 text-center font-bold desktop:text-xl"
      >
        If the download has not started, click on the button
      </p>
      <button
        class="rounded-xl bg-color-accent px-4 py-2 text-white hover:opacity-75"
        @click="fetchDistributions"
      >
        Download table
      </button>
      <a class="hidden" download="data.json" ref="downloadAnchorRef"></a>
    </div>
  </main>
</template>

<style scoped></style>
