<script lang="ts" setup>
const store = useStore()
const { t } = useI18n({ useScope: 'local' })

const signOut = [[{ label: t('statistics.account.sign-out') }]]

function signOutAndNavigate() {
  navigateTo('/login')
}

// State to track hover
const hovered = ref(false)

// Functions to handle mouse enter and leave events
function handleMouseEnter() {
  hovered.value = true
}

function handleMouseLeave() {
  hovered.value = false
}

// Function to navigate to a specific page
function navigateToPage() {
  navigateTo('/')
}
</script>

<template>
  <header class="grid w-full grid-cols-3 items-center py-4">
    <div
      class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-color-surface"
      @click="navigateToPage"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <Icon class="h-6 w-6" v-if="!hovered" name="local:innopolis-university" />
      <img
        class="scale-160 filter-icon h-6 w-6 transform"
        v-else
        alt="Arrow"
        src="/assets/icons/arrow-left-main.svg"
      />
    </div>

    <div class="justify-self-center">
      <slot />
    </div>

    <UDropdown class="justify-self-end" :items="signOut" @click="signOutAndNavigate" mode="hover">
      {{ store.email }}
    </UDropdown>
  </header>
</template>

<style scoped>
.filter-icon {
  filter: invert(47%) sepia(65%) saturate(276%) hue-rotate(111deg) brightness(92%) contrast(92%);
}

.scale-160 {
  transform: scale(1.6);
}

.hover\:bg-inno-green:hover {
  background-color: rgba(
    0,
    191,
    174,
    0.1
  ); /* Light tint of color-inno-green for the hover effect */
}
</style>
