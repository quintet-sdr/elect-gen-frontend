<script lang="ts" setup>
const store = useStore()

useHead({
  title: 'Select Electives - Elect.Gen',
  meta: [{ name: 'description', content: 'Fill out the form with your five priorities.' }]
})

function validateEmail(): boolean {
  if (email.value.length === 0) {
    return true
  }

  const validSymbols =
    "1234567890-+qwfpbjluyarstgmneioxcdvzkh.QWFPBJLUYARSTGMNEIOXCDVZKH!#$%&'*+-/=?^_`{|}~"

  for (const symbol of email.value) {
    if (!validSymbols.includes(symbol)) {
      return false
    }
  }

  if ([email.value[0], email.value[email.value.length - 1]].includes('.')) {
    return false
  }

  if (email.value.includes('..')) {
    return false
  }

  return true
}

function emailColor(): string | undefined {
  if (validateEmail()) {
    return undefined
  } else {
    return 'red'
  }
}

function submit(): void {
  store.email = `${email.value}@innopolis.university`
  navigateTo('/form')
}

const email = ref('')
</script>

<template>
  <form class="flex w-72 flex-col items-center gap-4" @submit.prevent="submit">
    <div class="flex w-full flex-col self-start">
      <UFormGroup label="Email" required>
        <div class="flex flex-row items-center gap-1">
          <UInput
            class="w-48 min-w-48"
            v-model="email"
            :color="emailColor()"
            placeholder="Local-part"
          />
          <span class="font-medium text-color-overlay" v-if="validateEmail() && email.length === 0">
            @innopolis.university
          </span>
          <span class="font-medium text-color-accent" v-if="validateEmail() && email.length > 0">
            @innopolis.university
          </span>
        </div>
      </UFormGroup>

      <span class="font-medium text-color-error" v-if="!validateEmail()">
        Enter a valid local-part.
      </span>
    </div>

    <UButton v-if="validateEmail() && email.length > 0" type="submit"> Proceed </UButton>
  </form>
</template>
