<script lang="ts" setup>
import { useRouter } from 'vue-router'

const store = useStore()
const { t } = useI18n({ useScope: 'local' })

const signOut = [[{ label: t('statistics.account.signOut') }]]

const router = useRouter()

function signOutAndNavigate() {
  router.push('/login')
}
</script>

<template>
  <header class="my-6 flex flex-row justify-between">
    <Icon class="size-6" name="local:innopolis-university" />

    <UDropdown :items="signOut" @click="signOutAndNavigate" mode="hover">{{
      store.email
    }}</UDropdown>
  </header>
</template>

<style scoped></style>
