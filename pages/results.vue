// TODO: сделать автозагрузку таблицы при редиректе // TODO: исправить локальную поломку черного
фона

<script lang="ts" setup>
import { computed, defineExpose, ref } from 'vue'

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
  <main class="flex min-h-screen flex-col items-center justify-center gap-8">
    <text class="font-bold tablet:text-4xl desktop:text-7xl">We're all done!</text>
    <div
      class="desktop:min-w-1/2 mb-4 bg-black p-4 text-white tablet:max-w-screen-tablet tablet:text-wrap tablet:rounded-sm desktop:rounded-xl"
    >
      <pre>{{ formattedJson }}</pre>
    </div>
    <p
      class="text-color-darkblue dark:text-color-lightgray tablet:text-m mb-4 font-bold tablet:max-w-screen-tablet desktop:text-xl"
    >
      If the download has not started, click on the button
    </p>
    <button
      class="rounded-xl bg-color-accent px-4 py-2 text-white hover:opacity-75"
      @click="downloadJson"
    >
      Download table
    </button>
    <a :href="downloadUrl" download="data.json" ref="downloadAnchorRef" style="display: none"></a>
  </main>
</template>
