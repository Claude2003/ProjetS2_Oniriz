<script setup lang="ts">
defineProps<{
  imgAlt: string
  imgPath: string
}>()
</script>
<template>
    <picture class="relative flex overflow-hidden before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-b from-[#645794]/0 to-[#1f1b2e]">
      <img class="flex-[1_0_100%] object-cover mix-blend-multiply grayscale" :src="imgPath" :alt="imgAlt" />
    </picture>
  </template>
  