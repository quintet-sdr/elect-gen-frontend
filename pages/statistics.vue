<script lang="ts" setup>
import * as mathjs from 'mathjs'

function random(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1))
}

const totalStudents = 321

function updateCount() {
  submittedCount.value = random(0, totalStudents)
}

const submittedCount: Ref<number> = ref(0)
updateCount()

const email = ref('a.potyomckin@innopolis.ru')

const submittedPercent = computed(() => {
  return mathjs.round((100 * submittedCount.value) / totalStudents, 1)
})

const fileExtensions = ['xlsx', 'csv'] as const
const selected = ref(fileExtensions[0])
</script>

<template>
  <div>
    <header class="my-6 flex flex-row justify-between">
      <Icon class="size-6" name="local:innopolis-university" />
      <UDropdown>{{ email }}</UDropdown>
    </header>

    <main class="flex flex-col items-center">
      <h1 class="primary">{{ $t('appName') }}</h1>

      <div class="flex flex-row items-center gap-4">
        <span class="text-center">
          <i18n-t :plural="submittedCount" keypath="statistics.submitted.line1">
            <template #count>
              <b class="font-semibold">{{ submittedCount }}</b>
            </template>
            <template #percent>
              <b class="font-semibold">{{ `${submittedPercent}%` }}</b>
            </template>
          </i18n-t>
          <br />
          <i18n-t :plural="submittedCount" keypath="statistics.submitted.line2" />
        </span>
        <UButton @click="submittedCount.value = updateCount()" color="gray" variant="ghost">
          <Icon class="size-5" name="fa6-solid:rotate" />
        </UButton>
      </div>

      <div class="flex flex-col items-center">
        <div class="flex flex-row">
          <UButton>{{ $t('statistics.button.download') }}</UButton>
          <USelectMenu
            v-model="selected"
            :arrow="{ placement: 'left-top' }"
            :options="fileExtensions"
            default="xlsx"
            mode="hover"
            variant="none"
          />
        </div>
        <UButton to="/form" variant="link">{{ $t('statistics.button.fill') }}</UButton>
      </div>
      <UButton
        class="border-primary flex h-90 w-160 flex-col items-center justify-evenly rounded-3xl border-4 border-dashed"
        variant="ghost"
      >
        <h2 class="text-2xl font-semibold">{{ $t('statistics.form.heading') }}</h2>
        <div class="flex flex-row gap-16">
          <Icon class="size-24" name="fa6-solid:file-csv" />
          <Icon class="size-24" name="fa6-solid:table" />
          <Icon class="size-24" name="fa6-solid:file-excel" />
        </div>
        <UInput color="gray" type="file" />
      </UButton>
    </main>
  </div>
</template>
