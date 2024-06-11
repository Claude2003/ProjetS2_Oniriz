<script  lang="ts">
import { RouterView } from 'vue-router'
import oniriz from '@/components/icons/Oniriz.vue'

import PocketBase from 'pocketbase';
import { ref } from 'vue';

export default {
  setup() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const acceptedConditions = ref(false);

    const register = async () => {
      if (!acceptedConditions.value) {
        // L'utilisateur n'a pas accepté les conditions
        return;
      }

      const email = document.getElementById('login').value;
      const password = document.getElementById('passwd').value;
      const passwordConfirm = document.getElementById('passwd-confirm').value;
      const name = document.getElementById('last-name').value;

      await pb.collection('users').create({ email, password, passwordConfirm, name });
    };

    return {
      acceptedConditions,
      register,
    };
  },
};
</script>

<template>
  <main class="main-content">

<div>
  <div  class="text-left m-10  space-y-4">
    <h2 class="text-8xl ">Se connecter</h2>
     <p> N’ai plus peur de ce que signifie tes rêves</p>
       </div>
       
       <div class="w-20 h-20 mx-auto mb-6 md:mr-6">
<oniriz />
</div>

        <form class="space-y-6 sm:mx-auto m-6 sm:w-full text-white sm:max-w-sm mt-20 mb-20 m-8" action="#" method="POST">

          <div>
            <label for="email" class="block text-sm  leading-8 font-bold text-white">E-mail </label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required
                class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm leading-8 font-bold text-white">Mot de passe </label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required 
            class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <RouterLink to="/email">
          <p class="mt-10 text-right font-bold text-white text-sm ">Mot de passe oublié ?</p>
        </RouterLink>

        <div class="flex justify-center space-x-4">
            
            <RouterLink to="/profil"><button class="bg-indigo-800 text-white  font-bold py-2 px-40 rounded-full inline-flex items-center lg:flex-row">Connexion</button></RouterLink>
        </div>

          <router-link to="/seconnecter">
    <p class="text-center text-white font-bold"> vous n’avez pas de compte ? <span class="text-violet-500 font-bold">S’inscrire</span></p>
  </router-link>
        </form>

  </main>
  </template>