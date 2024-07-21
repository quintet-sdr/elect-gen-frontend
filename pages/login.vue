<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Logo from '~/components/shared/Logo/Logo.vue'

const showPassword = ref(false)
const email = ref('')

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const router = useRouter()

function navigateToStatistics() {
  if (email.value === 'a.potyomckin@innopolis.ru' || email.value.includes('@innopolis.ru')) {
    router.push('/distribute')
  } else if (email.value.includes('@innopolis.university')) {
    router.push('/form')
  } else {
    alert("Your email is not in the system")
    console.log('invalid')
  }
}

definePageMeta({
  layout: false
})

useHead({
  title: 'Elect.Gen - Log in',
  meta: [
    { name: 'description', content: 'Login to the system' },
  ]
})
</script>

<template>
  <main class="flex min-h-svh w-full flex-col items-center justify-around">
    <a class="h-20 w-40" href="https://innopolis.university/">
      <Logo />
    </a>

    <div class="flex h-96 flex-col items-center justify-around rounded-3xl bg-white p-8">
      <h2 class="text-4xl font-bold text-color-dark">Sign in</h2>
      <input
        class="w-80 rounded-2xl bg-zinc-200 p-4 text-lg font-semibold text-black placeholder:font-semibold"
        v-model="email"
        autocomplete="email"
        name="email-form"
        placeholder="Email"
        type="email"
      />
      <input
        class="w-80 rounded-2xl bg-zinc-200 p-4 text-lg font-semibold text-black placeholder:font-semibold"
        :type="showPassword ? 'text' : 'password'"
        autocomplete="password"
        name="password-from"
        placeholder="Password"
      />
      <button
        class="relative bottom-12 left-28 -translate-y-1/2 transform text-black"
        @click="togglePasswordVisibility"
        type="button"
      >
        <span>
          {{ showPassword ? 'show' : 'hide' }}
        </span>
      </button>
      <UButton class="rounded-xl px-6 py-2.5 text-lg" @click="navigateToStatistics">
        Log in
      </UButton>
    </div>
  </main>
</template>

<style scoped>
input {
  &::placeholder {
    transform: translateX(0.7rem);
    letter-spacing: 1px;
    font-size: 16px;
  }
}
</style>
