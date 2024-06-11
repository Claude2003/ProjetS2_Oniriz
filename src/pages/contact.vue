<script setup lang="ts">
import { ref } from 'vue'

import Hero from '@/components/Hero.vue'

</script>

<template> 
  <main class="main-content">

    <Hero title="Agenda" imgPath="/public/img/sleeppicture.webp" imgAlt="Orchestre" />
    
    <div class="grid gap-x-4 w-full">
      <div>
        <h2 class="text-center text-2xl mt-16">Contact</h2>
        <p class="mt-4 text-center">Si vous souhaitez nous contacter, veuillez remplir les informations suivantes :</p>
      </div>

      <form class="space-y-6 sm:mx-auto sm:w-full text-white sm:max-w-sm mt-20 mb-20 m-8" action="#" method="POST">
        <div>
          <label for="nom" class="mb-4 block">Nom</label>
          <input type="text" id="nom" name="nom" class="w-full text-black rounded-md p-2">
        </div>

        <div>
          <label for="prenom" class="mb-4 block">Prénom</label>
          <input type="text" id="prenom" name="prenom" class="w-full text-black rounded-md p-2">
        </div>

        <div>
          <label for="email" class="mb-4 block">E-mail</label>
          <input type="email" id="email" name="email" class="w-full text-black rounded-md p-2">
        </div>

        <div>
          <label for="message" class="mb-4 block">Message</label>
          <textarea id="message" name="message" class="w-full text-black h-44 rounded-md p-2"></textarea>
        </div>

        <button class="bg-violet-300 text-black font-bold py-2 px-10 rounded justify-center mx-auto block" type="button">Envoyer</button>
      </form>
    </div>
  </main>
</template>



