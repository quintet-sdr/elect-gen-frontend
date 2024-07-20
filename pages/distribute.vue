<script lang="ts" setup>
import Heading from '~/components/shared/Heading.vue'
import * as api from '~/server/utils/api'

definePageMeta({ layout: false })

function clickById(id: string): void {
  document.getElementById(id)!.click()
}

function focusById(id: string): void {
  document.getElementById(id)!.focus()
}

async function updateCount(): Promise<void> {
  submittedCount.value = (await api.getStudents())?.length
}

const submittedCount = ref<number | undefined>()
onMounted(updateCount)

const fileExtensions = ['xlsx', 'csv']
const selected = ref(fileExtensions[0])
</script>

<template>
  <NuxtLayout :back="false" name="default">
    <Heading :level="1" :text="$t('app-name')" />

    <div class="grid grid-cols-3">
      <div />

      <span
        class="min-w-64 justify-self-center text-center"
        v-if="submittedCount !== undefined"
        @click="clickById('update')"
      >
        <i18n-t :plural="submittedCount" keypath="distribute.submitted.line-1">
          <template #count>
            <b class="font-semibold">{{ submittedCount }}</b>
          </template>
        </i18n-t>
        <br />
        <i18n-t :plural="submittedCount" keypath="distribute.submitted.line-2" />
      </span>
      <span class="min-w-64 text-center" v-else> {{ $t('info.database') }} </span>

      <UButton class="justify-self-start" id="update" @click="updateCount" variant="ghost">
        <Icon class="size-5 text-color-overlay" name="fa6-solid:rotate" />
      </UButton>
    </div>

    <div class="flex flex-col items-center">
      <div class="grid grid-cols-3">
        <div />

        <UButton :label="$t('distribute.button.download')" />

        <USelectMenu
          class="justify-self-start text-color-overlay"
          v-model="selected"
          :arrow="{ placement: 'left-top' }"
          :options="fileExtensions"
          :ui="{ base: 'hover:cursor-pointer' }"
          default="xlsx"
          variant="none"
        />
      </div>

      <UButton to="/form" variant="link">{{ $t('distribute.button.fill') }}</UButton>
    </div>

    <UButton
      class="flex h-90 w-160 flex-col items-center justify-evenly rounded-3xl border-4 border-dashed border-color-accent"
      @click="clickById('browse')"
      @focus="focusById('browse')"
      variant="ghost"
    >
      <h2 class="text-2xl font-semibold">{{ $t('distribute.form.heading') }}</h2>
      <div class="flex flex-row gap-16 text-gray-300">
        <Icon class="size-24" name="fa6-solid:file-csv" />
        <Icon class="size-24" name="fa6-solid:table" />
        <Icon class="size-24" name="fa6-solid:file-excel" />
      </div>
      <UInput id="browse" :ui="{ base: 'hover:cursor-pointer' }" color="gray" type="file" />
    </UButton>
  </NuxtLayout>
</template>
