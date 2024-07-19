<script lang="ts" setup>
import { useRouter } from 'vue-router';

const store = useStore()
const { t } = useI18n({ useScope: 'local' })

const signOut = [[{ label: t('statistics.account.signOut') }]]

const router = useRouter()

function signOutAndNavigate() {
  router.push('/login')
}

// State to track hover
const isHovered = ref(false)

// Functions to handle mouse enter and leave events
function handleMouseEnter() {
  isHovered.value = true
}

function handleMouseLeave() {
  isHovered.value = false
}

// Function to navigate to a specific page
function navigateToPage() {
  router.push('/statistics') 
}
</script>

<template>
  <header class="my-6 flex justify-between">
    <div
      class="flex items-center justify-center w-10 h-10 rounded-full transition duration-300 cursor-pointer hover:bg-opacity-10 hover:bg-inno-green"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="navigateToPage"
    >
      <Icon
        v-if="!isHovered"
        class="w-6 h-6"
        name="local:innopolis-university"
      />
      <img
        v-else
        src="/assets/icons/arrow-left-main.svg"
        class="w-6 h-6 transform scale-160 filter-icon"
        alt="Arrow"
      />
    </div>

    <UDropdown :items="signOut" @click="signOutAndNavigate" mode="hover">
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
  background-color: rgba(0, 191, 174, 0.1); /* Light tint of color-inno-green for the hover effect */
}
</style>
