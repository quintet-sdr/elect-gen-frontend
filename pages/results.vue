<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Heading from "~/components/shared/Text/Heading.vue"
import * as api from "~/server/utils/api"

const store = useStore()

const isLoading = ref(true)
const downloadAnchorRef = ref<HTMLAnchorElement | null>(null)

const fetchDistributions = async () => {
  try {
    const response = await store.distributions
    if (response.ok) {
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      if (downloadAnchorRef.value) {
        downloadAnchorRef.value.href = url
        downloadAnchorRef.value.download = 'distributions.xlsx'
        downloadAnchorRef.value.click()
      }
    } else {
      console.error('Ошибка при получении данных', response.statusText)
    }
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
    <div v-if="isLoading" class="flex-col gap-6 fixed inset-0 flex items-center justify-center bg-color-base bg-opacity-80 z-50">
      <Heading text="Loading..." :level="2"/>
      <div class="w-12 h-12 border-8 border-t-8 border-gray-200 border-t-color-accent rounded-full animate-spin"></div>
    </div>
    <div v-else class="flex min-h-screen flex-col items-center justify-center gap-8">
      <Heading text="We're all done!"/>
      <p class="text-color-darkblue dark:text-color-lightgray tablet:text-m mb-4 text-center font-bold desktop:text-xl">
        If the download has not started, click on the button
      </p>
      <button class="rounded-xl bg-color-accent px-4 py-2 text-white hover:opacity-75" @click="fetchDistributions">
        Download table
      </button>
      <a download="data.json" ref="downloadAnchorRef" class="hidden"></a>
    </div>
  </main>
</template>

<style scoped>
</style>
