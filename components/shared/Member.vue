<template>
  <button>
  <a
    class="flex flex-col items-center transition duration-200 ease-in-out hover:text-green-500"
    :href="link"
    rel="noopener noreferrer"
    target="_blank"
  >
    <div class="h-24 w-24 rounded-full">
      <img class="rounded-full" :alt="alt" :src="image" />
    </div>
    <p class="text-center font-bold">{{ name }}</p>
    <p class="text-center">{{ role }}</p>
  </a>
    </button>
</template>

<script lang="ts" setup>
defineProps({
  link: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})
</script>
