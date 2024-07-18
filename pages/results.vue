<script lang="ts" setup>
  import { computed } from 'vue';
import Header from '~/components/widgets/Header.vue';

  interface JsonData {
    student_email: string
    id: number
    course_codename: string
  }
  
  const jsonData = {
    student_email: "i.nguen@innopolis.university",
    id: 1,
    course_codename: "Front-end Web Development"
  } as JsonData;
  
  const formattedJson = computed(() => JSON.stringify(jsonData, null, 2));
  
  function downloadJson(): void {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
</script>

<template>
    <Header />
    <main class="flex flex-col items-center justify-center min-h-screen">
        <h1 class="primary text-2xl text-color-darkblue dark:color-lightgray font-semibold mb-4">We're all done!</h1>
        <div class="bg-black text-white w-full max-w-4xl h-[32rem] overflow-auto p-4 mb-4">
            <pre>{{ formattedJson }}</pre>
        </div>
        <p class="text-xl font-bold text-color-darkblue dark:color-lightgray mb-4">If the download has not started click on the button</p>
        <button @click="downloadJson" class="bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-700">
            Download table
        </button>
    </main>
</template>

