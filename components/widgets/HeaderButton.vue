<template>
  <header class="my-6 flex flex-row justify-between">
    <div
      class="icon-container"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="navigateToPage"
    >
      <Icon
        v-if="!isHovered"
        class="size-6"
        name="local:innopolis-university"
      />
      <img
        v-else
        src="/assets/icons/arrow-left-main.svg"
        class="size-6 icon-hovered"
        alt="Arrow"
      />
    </div>

    <UDropdown :items="signOut" @click="signOutAndNavigate" mode="hover">
      {{ store.email }}
    </UDropdown>
  </header>
</template>

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

<style scoped>
.size-6 {
  width: 24px;
  height: 24px;
}

.icon-hovered {
  filter: invert(47%) sepia(65%) saturate(276%) hue-rotate(111deg) brightness(92%) contrast(92%);
  transform: scale(1.6); 
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.3s;
  cursor: pointer; 
}

.icon-container:hover {
  background-color: rgba(0, 191, 174, 0.1); /* Light tint of color-inno-green for the hover effect */
}
</style>
