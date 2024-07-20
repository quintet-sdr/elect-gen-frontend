<script lang="ts" setup>
import * as mathjs from 'mathjs'
import Heading from '~/components/shared/Heading.vue'
import Header from '~/components/widgets/Header.vue'

function clickById(id: string): void {
  document.getElementById(id)!.click()
}

function focusById(id: string): void {
  document.getElementById(id)!.focus()
}

function random(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function updateCount(): void {
  if (submittedCount.value === 0) {
    submittedCount.value = 1
    return
  }
  submittedCount.value = Math.min(submittedCount.value + random(1, 35), totalStudents.value)
}

const totalStudents = ref(350)
const submittedCount = ref(0)

const submittedPercent = computed(() => {
  return mathjs.round((100 * submittedCount.value) / totalStudents.value, 1)
})

const fileExtensions = ['xlsx', 'csv']
const selected = ref(fileExtensions[0])
</script>

<template>
  <div>
    <Header />

    <main class="flex flex-col items-center gap-4">
      <Heading :text="$t('app-name')" />

      <div class="grid grid-cols-3">
        <div />

        <span class="min-w-64 justify-self-center text-center" @click="clickById('update')">
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

        <UButton class="justify-self-start" id="update" @click="updateCount" variant="ghost">
          <Icon class="size-5 text-gray-500" name="fa6-solid:rotate" />
        </UButton>
      </div>

      <div class="flex flex-col items-center">
        <div class="grid grid-cols-3">
          <div />

          <UButton :label="$t('statistics.button.download')" />

          <USelectMenu
            class="justify-self-start text-gray-500"
            v-model="selected"
            :arrow="{ placement: 'left-top' }"
            :options="fileExtensions"
            :ui="{ base: 'hover:cursor-pointer' }"
            default="xlsx"
            variant="none"
          />
        </div>

        <UButton to="/form" variant="link">{{ $t('statistics.button.fill') }}</UButton>
      </div>

      <UButton
        class="border-primary flex h-90 w-160 flex-col items-center justify-evenly rounded-3xl border-4 border-dashed"
        @click="clickById('browse')"
        @focus="focusById('browse')"
        variant="ghost"
      >
        <h2 class="text-2xl font-semibold">{{ $t('statistics.form.heading') }}</h2>
        <div class="flex flex-row gap-16 text-gray-300">
          <Icon class="size-24" name="fa6-solid:file-csv" />
          <Icon class="size-24" name="fa6-solid:table" />
          <Icon class="size-24" name="fa6-solid:file-excel" />
        </div>
        <UInput id="browse" :ui="{ base: 'hover:cursor-pointer' }" color="gray" type="file" />
      </UButton>
    </main>
  </div>
</template>
