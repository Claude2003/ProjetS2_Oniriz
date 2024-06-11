<script setup lang="ts">

defineProps<{
  title: string
  imgPath: string
  imgAlt: string
}>()
</script>

<template>
  <div class="relative -z-10 ">
    <img :src="imgPath" :alt="imgAlt" class="w-full h-auto object-cover" />
    <div class="absolute inset-0 flex items-end justify-start  bg-opacity-50 p-4">
      <h1 class="text-white text-4xl font-bold">{{ title }}</h1>
    </div>
  
  </div>
</template>
