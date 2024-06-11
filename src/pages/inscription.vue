<script>
import oniriz from '@/components/icons/Oniriz.vue';
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
<div  class="text-left m-10  space-y-4">
    <h2 class="text-8xl ">S’inscrire</h2>
     <p> N’ai plus peur de ce que signifie tes rêves</p>
       </div>

<oniriz />

    <form class="space-y-6 mt-10 mb-36 sm:mx-auto m-6 text-base font-bold sm:w-full sm:max-w-sm">
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide  mb-2" for="last-name">
          Nom
        </label>
        <input class="block w-full bg-Impure-white text-black border rounded-lg py-3 px-4 mb-3 h-11" id="last-name" type="text">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide mb-2" for="first-name">
          Prénom
        </label>
        <input class="block w-full bg-Impure-white text-black border rounded-lg py-3 px-4 mb-3 h-11" id="first-name" type="text">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide   mb-2" for="login">
          E-mail
        </label>
        <input class="block w-full bg-Impure-white text-black border rounded-lg py-3 px-4 mb-3 h-11" id="login" type="email">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide   mb-2" for="passwd">
          Mot de passe
        </label>
        <input class="block w-full bg-Impure-white text-black border rounded-lg py-3 px-4 mb-3 h-11" id="passwd" type="password">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide  mb-2" for="passwd-confirm">
          Confirmer le mot de passe
        </label>
        <input class="block w-full bg-Impure-white text-black border rounded-lg py-3 px-4 mb-3 h-11" id="passwd-confirm" type="password">
      </div>
      
      <div class="flex items-center justify-center">
        <input type="checkbox" id="conditions" name="conditions" class="mr-2 purple-checkbox" v-model="acceptedConditions">
        <router-link to="/conditions">
          <label for="conditions">J'accepte les conditions d'utilisation</label>
        </router-link>
      </div>

      <div class="md:col-span-2 flex justify-center m-4">
        <button class="bg-indigo-800 text-white  font-bold py-3 px-40 rounded-full inline-flex items-center lg:flex-row" type="button" @click="register" :disabled="!acceptedConditions">S'inscrire</button>
      </div>
      
      <router-link to="/seconnecter">
        <p class=" mt-6 text-center text-sm text-white">Vous avez déjà un compte ? <span class="text-violet-500">Se connecter</span></p>
      </router-link>
    </form>
  </main>
</template>

