<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  message: string
  visible: boolean
}>()
</script>

<template>
  <transition name="fade">
    <div class="absolute bottom-4 z-10 w-72 rounded-xl bg-red-500 p-5" v-if="props.visible">
      <p class="font-semibold text-color-darkblue">{{ props.message }}</p>
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
