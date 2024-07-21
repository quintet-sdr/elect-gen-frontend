<script lang="ts" setup>
import Heading from '~/components/shared/Text/Heading.vue'
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

const fileExtensions = ['xlsx', 'csv']
const extension = ref(fileExtensions[0])

function checkExtension(): boolean {
  if (filepath.value === undefined) {
    return false
  }

  const types: string[] = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv'
  ] as const

  return types.includes(browseButton.value!.files![0].type)
}

async function submit(): Promise<void> {
  await api.uploadTable(browseButton.value!.files![0]).then((response) => response.json())
}

const filepath = ref<string>()
const browseButton = ref<HTMLInputElement>()

onMounted(() => {
  browseButton.value = document.getElementById('browse') as HTMLInputElement

  updateCount()
})
</script>

<template>
  <NuxtLayout :back="false" name="default">
    <Heading :level="1" :text="$t('app-name')" />

    <div class="grid grid-cols-3 tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
      <div />

      <span
        class="min-w-64 justify-self-center text-center tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
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
      <span
        class="min-w-64 text-center tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
        v-else
      >
        {{ $t('info.database') }}
      </span>

      <UButton
        class="justify-self-start tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
        id="update"
        @click="updateCount"
        variant="ghost"
      >
        <Icon
          class="size-5 text-color-overlay tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
          name="fa6-solid:rotate"
        />
      </UButton>
    </div>

    <div class="flex flex-col items-center tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
      <div class="grid grid-cols-3 tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
        <div />

        <UButton :label="$t('distribute.button.download')" />

        <USelectMenu
          class="justify-self-start text-color-overlay tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
          v-model="extension"
          :arrow="{ placement: 'left-top' }"
          :options="fileExtensions"
          :ui="{ base: 'hover:cursor-pointer' }"
          default="xlsx"
          variant="none"
        />
      </div>

      <UButton
        class="tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
        to="/form"
        variant="link"
        >{{ $t('distribute.button.fill') }}
      </UButton>
    </div>

    <UButton
      class="flex h-90 w-160 flex-col items-center justify-evenly rounded-3xl border-4 border-dashed border-color-accent tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
      @click="clickById('browse')"
      @focus="focusById('browse')"
      variant="ghost"
    >
      <h2 class="text-2xl font-semibold tablet:max-w-screen-tablet desktop:max-w-screen-desktop">
        {{ $t('distribute.form.heading') }}
      </h2>
      <div
        class="flex flex-row gap-16 text-gray-300 tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
      >
        <Icon
          class="size-24 tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
          name="fa6-solid:file-csv"
        />
        <Icon
          class="size-24 tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
          name="fa6-solid:table"
        />
        <Icon
          class="size-24 tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
          name="fa6-solid:file-excel"
        />
      </div>

      <UInput
        id="browse"
        v-model="filepath"
        :ui="{ base: 'hover:cursor-pointer' }"
        color="gray"
        type="file"
      />
    </UButton>

    <UButton v-if="checkExtension()" @click="submit"> {{ $t('distribute.form.proceed') }}</UButton>
    <span v-else-if="filepath !== undefined">
      {{ $t('distribute.form.wrong-extension-error') }}
    </span>
  </NuxtLayout>
</template>
