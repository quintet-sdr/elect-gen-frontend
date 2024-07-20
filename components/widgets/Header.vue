<script lang="ts" setup>
// const { t } = useI18n({ useScope: 'local' })
// const store = useStore()
// const signOut = [[{ label: t('header.account.sign-out') }]]

// function signOutAndNavigate() {
//   navigateTo('/login')
// }

interface Props {
  back: boolean
}

const props = withDefaults(defineProps<Props>(), {
  back: false
})

const iconName = props.back ? 'fa-solid:arrow-left' : 'local:innopolis-university'

function navigateToPage() {
  navigateTo('/')
}
</script>

<template>
  <header class="grid h-16 w-full grid-cols-3 items-center">
    <div class="flex h-10 w-10 cursor-pointer items-center justify-center" @click="navigateToPage">
      <Icon class="size-6" :name="iconName" />
    </div>

    <div class="justify-self-center">
      <slot />
    </div>

    <!-- <UDropdown class="justify-self-end" :items="signOut" @click="signOutAndNavigate" mode="hover">
      {{ store.email }}
    </UDropdown> -->
  </header>
</template>
