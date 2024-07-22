<script lang="ts" setup>
import { defineExpose } from 'vue'
import Heading from "~/components/shared/Text/Heading.vue";

const store = useStore()

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

useHead({
  title: 'Elect.Gen - Algorithm finished',
  meta: [
    { name: 'description', content: 'Algorithm finished work, take your distributions!' },
    { name: 'keywords', content: 'distribution, Excel, algorithms, students distribution' }
  ]
})
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center gap-8">
    <Heading text="We're all done!"/>
    <p
      class="text-color-darkblue dark:text-color-lightgray tablet:text-m mb-4 text-center font-bold desktop:text-xl"
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
