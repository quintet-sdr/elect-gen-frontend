<template>
    <a 
      :href="link" 
      rel="noopener noreferrer" 
      target="_blank" 
      class="transition duration-200 ease-in-out hover:text-green-500 flex flex-col items-center" 
    >
      <div class="app mb-[10px] h-[8vw] w-[8vw] rounded-full">
        <img :src="image" :alt="alt" class="rounded-full" />
      </div>
      <p class="text-center font-bold">{{ name }}</p>
      <p class="text-center">{{ role }}</p>
    </a>
  </template>
  
  <script setup>
  defineProps({
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  });
  </script>
  