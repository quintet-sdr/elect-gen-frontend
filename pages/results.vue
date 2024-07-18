// TODO: сделать автозагрузку таблицы при редиректе // TODO: исправить локальную поломку черного
фона

<script lang="ts" setup>
import { computed } from 'vue'
import Header from '~/components/widgets/Header.vue'

interface JsonData {
  student_email: string
  id: number
  course_codename: string
}

const jsonData = {
  student_email: 'i.nguen@innopolis.university',
  id: 1,
  course_codename: 'Front-end Web Development'
} as JsonData

const formattedJson = computed(() => JSON.stringify(jsonData, null, 2))

function downloadJson(): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonData))
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute('download', 'data.json')
  document.body.appendChild(downloadAnchorNode)
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}
</script>

<template>
  <Header />
  <main class="flex min-h-screen flex-col items-center justify-center gap-8">
    <h1 class="primary">We're all done!</h1>
    <div class="mb-4 w-2/5 rounded-xl bg-black p-4 text-white">
      <pre>{{ formattedJson }}</pre>
    </div>
    <p class="mb-4 text-xl font-bold text-color-darkblue dark:text-color-lightgray">
      If the download has not started click on the button
    </p>
    <button
      class="rounded-xl bg-color-inno-green px-4 py-2 text-white hover:bg-green-700"
      @click="downloadJson"
    >
      Download table
    </button>
  </main>
</template>

<style scoped></style>
