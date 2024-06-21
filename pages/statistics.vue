<script setup lang="ts">
import * as mathjs from 'mathjs'

const submittedCount = ref(1)
const submittedPercent = computed(() => {
  const totalStudents = 321
  return mathjs.round((100 * submittedCount.value) / totalStudents, 1)
})

const fileExtensions = ['xlsx', 'csv'] as const
</script>

<template>
  <main class="flex flex-col items-center">
    <h1 class="primary">{{ $t('appName') }}</h1>

    <span class="text-center">
      <i18n-t keypath="statistics.submitted.line1" :plural="submittedCount">
        <template #count>
          <b class="font-semibold">{{ submittedCount }}</b>
        </template>
        <template #percent>
          <b class="font-semibold">{{ `${submittedPercent}%` }}</b>
        </template>
      </i18n-t>
      <br />
      <i18n-t keypath="statistics.submitted.line2" :plural="submittedCount" />
    </span>

    <div class="flex flex-col items-center">
      <div class="flex flex-row">
        <UButton>{{ $t('statistics.button.download') }}</UButton>
        <USelectMenu v-model="selected" variant="none" :options="fileExtensions" />
      </div>
      <UButton variant="link">{{ $t('statistics.button.fill') }}</UButton>
    </div>

    <div
      class="border-primary flex h-90 w-160 flex-col items-center justify-evenly rounded-3xl border-4 border-dashed"
    >
      <h2 class="text-2xl font-semibold">{{ $t('statistics.form.heading') }}</h2>
      <div class="flex flex-row gap-16">
        <Icon name="fa6-solid:file-csv" class="size-24" />
        <Icon name="fa6-solid:table" class="size-24" />
        <Icon name="fa6-solid:file-excel" class="size-24" />
      </div>
      <UButton color="gray" variant="solid">{{ $t('statistics.form.button') }}</UButton>
    </div>
  </main>
</template>
