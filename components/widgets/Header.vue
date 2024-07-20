<script lang="ts" setup>
interface Props {
  back: boolean
}

const props = withDefaults(defineProps<Props>(), {
  back: false
})

const iconName = props.back ? 'fa-solid:arrow-left' : 'local:innopolis-university'

function goBack() {
  navigateTo('/')
}
</script>

<template>
  <header class="grid h-16 w-full grid-cols-3 items-center">
    <button
      class="flex h-10 w-10 cursor-pointer items-center justify-center text-color-overlay hover:text-color-text"
      @click="goBack"
    >
      <Icon class="size-6" :name="iconName" />
    </button>

    <div class="justify-self-center">
      <slot />
    </div>
  </header>
</template>
