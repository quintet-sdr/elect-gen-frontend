<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  message: string;
  visible: boolean;
}>();


</script>

<template>
  <transition name="fade">
    <div v-if="props.visible" class="bg-green-400 text-color-darkblue p-5 rounded-xl absolute z-10 bottom-4">
    <p class="text-color-darkblue font-semibold">{{ props.message }}</p>
  </div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0.1%;
}
</style>
