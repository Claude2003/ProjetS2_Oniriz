<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'
import oniriz from '@/components/icons/Oniriz.vue'
import IconFacebook from '@/components/icons/facebook.vue'
import IconInstagram from '@/components/icons/instagram.vue'
import IconTwitter from '@/components/icons/twitter.vue'

</script>


<template> 
    <main class="main-content">

     

<h2 class="text-left text-2xl mt-16">À PROPOS</h2>

<section class=" presntation text-white p-4 m-6">

    <div class="w-48 mt-14">
<oniriz />
</div>

<div class="lg:w-1/2 mb-20 m-8">
<p>Oniriz est le résultat d’un projet étudiant, qui a évolué pour fournir à la plus grande partie, la possibilité de ...</p>

<p class="mt-10">Fondé en 2023 par quatres étudiants de la formation MMI à Montbéliard, en France, Oniriz a pour objectif de donner l’opportunité à chacun, de participer ...</p>

<p class="mt-10">Nous savons que la recherche d’un... est souvent complexe, ...</p>

<p class="mt-10">
    Nous donnons la chance à chacun de pouvoir découvrir toutes les possibilité et opportunités en terme de hiking et randonnée pédestres, dans leur région et près de chez eux, et de faire le choix parmi nos partenaires présents sur le site pour leur donner la possibilité de d’atteindre leurs objectifs.
</p>
<p class="mt-10">Oniriz, c’est la possibilité de prendre un nouveau départ vers votre passion. Ce qui nous motive, c’est de vous aider à donner vie à vos passions.</p>
</div>
</section>

<section>
<h2 class="text-center text-2xl mt-16">Notre équipe</h2>


  <div class="mx-auto max-w-7xl px-6 ">
    
    <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 ">
      <li>
        <img class=" w-24 h-[100px] rounded-full " src="/public/img/IMG.webp" alt="">
        
        <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Iker Castillas</h3>
        <p class="text-base leading-7 text-gray-600">Spanish goalkeeper</p>
        <div class=" ">
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
      </li>

      <li>
        <img class=" w-24 h-[100px] rounded-full " src="/public/img/IMG.webp" alt="">
        
        <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Iker Castillas</h3>
        <p class="text-base leading-7 text-gray-600">Spanish goalkeeper</p>
        <div class=" ">
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
      </li>

      <li>
        <img class=" w-24 h-[100px] rounded-full " src="/public/img/IMG.webp" alt="">
        
        <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Iker Castillas</h3>
        <p class="text-base leading-7 text-gray-600">Spanish goalkeeper</p>
        <div class=" ">
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
      </li>
    </ul>
  </div>


</section> 

<div>
        <h2 class="text-center text-2xl mt-16">Notre site vous intéresse ? </h2>
        <p class="mt-4 text-center">Renseignez votre adresse mail pour être tenu au courant des dernières nouveautés de Oniriz.</p>
      
        <h3 class="text-left mt-4 m-8">E-mail</h3>
 <div class="flex items-center justify-center w-full">

  <div class="md:w-1/2 ">
    <label for="email" class="block text-sm font-medium leading-6 text-white"></label>
    <input id="email" name="email" type="email" autocomplete="email" required
      class="md:w-full rounded-md py-2 px-16 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">
  </div>
  <button class="bg-violet-300 text-black font-bold ml-2 py-2 px-4 rounded inline-flex items-center ">
    S'inscrire
  </button>
</div>


 <p class="text-center  text-xs mt-8 mb-20">
 Vous pouvez vous désabonner à tout moment. </p>
      
      </div>
    </main>
    <RouterView />
</template>