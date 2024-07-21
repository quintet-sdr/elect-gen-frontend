<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  message: string
  visible: boolean
}>()
</script>

<template>
  <transition name="fade">
    <div class="flex flex-row items-center justify-center absolute bottom-4 z-10 min-w-72 rounded-xl bg-red-500 p-5" v-if="props.visible">
      <p class="text-color-text font-semibold">{{ props.message }}</p>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0.1%;
}
</style>
