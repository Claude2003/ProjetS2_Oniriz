<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/components/icons/logo1.vue'
import IconFacebook from '@/components/icons/facebook.vue'
import IconInstagram from '@/components/icons/instagram.vue'
import IconTwitter from '@/components/icons/twitter.vue'

import { RouterLink } from 'vue-router'

const activeMenu = ref(false)

	function closeMenu() {
	  activeMenu.value = false
	}

</script>
<template>
  <header class=" transparent-gradient flex items-center justify-between px-4 h-20 ">
  

    <RouterLink to="/">
      <logo />
    </RouterLink>
    <div class="relative z-10">
      
      <button
    class="w-6 h-3 flex flex-col justify-between lg:hidden"
    @click="activeMenu = !activeMenu">

    <span
      class="block h-[2px] w-full rounded-full transition duration-300"
      :class="{ 'bg-white': !activeMenu, 'bg-white translate-y-[5px] rotate-45': activeMenu } "></span>
      <span
      class="block h-[2px] w-full rounded-full transition duration-300"
      :class="{ 'bg-white': !activeMenu, 'bg-white opacity-0': activeMenu }"></span>
      <span
      class="block h-[2px] w-full rounded-full transition duration-300"
      :class="{ 'bg-white': !activeMenu, 'bg-white -translate-y-[5px] -rotate-45': activeMenu }"></span>
  </button>
   </div>


  
 
  <nav class="image_nav text-center text-white invisible fixed inset-0 px-6 py-12 flex flex-col justify-between lg:visible lg:opacity-100 lg:static lg:bg-transparent lg:mt-0 lg:flex-row lg:flex-1 " :class="{ '!visible !opacity-100': activeMenu }" v-scroll-lock="activeMenu">
  <h3 class="uppercase text-3xl font-bold mt-16">Menu</h3>
  <ul class="my-auto mt-8 flex flex-col gap-4">
    <li><RouterLink class="text-base font-bold uppercase" to="/journal" @click="closeMenu">JOURNAL</RouterLink></li>
    <hr class="border-gray-300">
    <li><RouterLink class="text-base font-bold uppercase" to="/interpretation" @click="closeMenu">INTERPRÉTATION</RouterLink></li>
    <hr class="border-gray-300">
    <li><RouterLink class="text-base font-bold uppercase" to="/generateur" @click="closeMenu">GÉNÉRATEUR D’IMAGES</RouterLink></li>
    <hr class="border-gray-300">
    <li><RouterLink class="text-base font-bold uppercase" to="/ecrire" @click="closeMenu">ENTRER UN RÊVE</RouterLink></li>
    <hr class="border-gray-300">
    <li><RouterLink class="text-base font-bold uppercase" to="/profil" @click="closeMenu">Profil</RouterLink></li>
    <hr class="border-gray-300">
    <li><RouterLink class="text-base font-bold uppercase" to="/contact" @click="closeMenu">Contact</RouterLink></li>
    <hr class="border-gray-300">
  </ul>
  <div>
    <ul class="flex items-center mt-16 gap-8">
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
</nav>



    
  </header>

</template>
