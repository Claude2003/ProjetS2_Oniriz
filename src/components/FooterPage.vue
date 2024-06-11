<script setup lang="ts">

import oniriz from '@/components/icons/Oniriz.vue'
import IconFacebook from '@/components/icons/facebook.vue'
import IconInstagram from '@/components/icons/instagram.vue'
import IconTwitter from '@/components/icons/twitter.vue'

import { RouterLink } from 'vue-router'
</script>
<template>
  
  <footer class="transparent-gradient p-9 ">
  <div class="space-y-3">
    <RouterLink to="/">
      <oniriz />
    </RouterLink>
  
  <div class="flex justify-between ">
  <div>
  <ul class="flex items-center mt-4 gap-8">
  <li>
  <a href="https://facebook.com" aria-label="facebook">
  <IconFacebook />
  </a>
  </li>
  <li>
  <a href="https://instagram.com" aria-label="instagram">
  <IconInstagram />
  </a>
  </li>
  <li>
  <a href="https://instagram.com" aria-label="instagram">
  <IconTwitter />
  </a>
  </li>
  </ul>
  </div>

  <nav class="text-left ">
    <div>
        <h3 class=" text-base text-violet-300">Mentions légales</h3>
        <ul class="text-gray-300 mt-4 text-sm ">
          <li class="mb-4"><RouterLink to="/request">Politique de confidentialité
</RouterLink></li>
          <li class="mb-4"><RouterLink to="/pricing">Politique de cookies
</RouterLink></li>
          <li class="mb-4"><RouterLink to="/reviews">Conditions d’utilisations</RouterLink></li>
         
        </ul>
      </div>
      <div>
        <h3 class=" text-base mt-8 text-violet-300">Autres</h3>
        <ul class="text-gray-300 mt-4 text-sm ">
          <li class="mb-4"><RouterLink to="/apropos">À propos</RouterLink></li>
          <li class="mb-4"><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>

      

      
     
    </nav>
  
  </div>
  </div>
  
  
  </footer>
  
  
 
  
  </template>
  