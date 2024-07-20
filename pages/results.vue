// TODO: сделать автозагрузку таблицы при редиректе // TODO: исправить локальную поломку черного
фона

<script lang="ts" setup>
import { computed, defineExpose, ref } from 'vue'
import Header from '~/components/widgets/Header.vue'

interface JsonData {
  student_email: string
  id: number
  course_codename: string
}

const jsonData = ref<JsonData>({
  student_email: 'i.nguen@innopolis.university',
  id: 1,
  course_codename: 'Front-end Web Development'
})

const formattedJson = computed(() => JSON.stringify(jsonData.value, null, 2))

const downloadUrl = ref('')
const downloadAnchorRef = ref<HTMLAnchorElement | null>(null)

function downloadJson(): void {
  downloadUrl.value =
    'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonData.value))
  if (downloadAnchorRef.value) {
    downloadAnchorRef.value.click()
  }
}

defineExpose({
  downloadJson
})
</script>

<template>
  <Header />
  <main class="flex min-h-screen flex-col items-center justify-center gap-8">
    <h1 class="primary">We're all done!</h1>
    <div class="mb-4 w-2/5 rounded-xl bg-black p-4 text-white">
      <pre>{{ formattedJson }}</pre>
    </div>
    <p class="text-color-darkblue dark:text-color-lightgray mb-4 text-xl font-bold">
      If the download has not started click on the button
    </p>
    <button
      class="bg-color-inno-green rounded-xl px-4 py-2 text-white hover:bg-green-700"
      @click="downloadJson"
    >
      Download table
    </button>
    <a :href="downloadUrl" download="data.json" ref="downloadAnchorRef" style="display: none"></a>
  </main>
</template>
