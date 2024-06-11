<template>

<div>
  <h1>
  Bienvenue sur Oniriz </h1>

<p> N’ai plus peur de ce que signifie tes rêves </p>
</div>
<div class="w-48 mt-14">
<oniriz />
</div>

  <div class="flex items-center justify-center min-h-screen ">
    <div class=" p-10  max-w-md w-full">
      
      <button @click="signInWithGoogle" class="w-full py-3 px-4 bg-white font-bold text-indigo-800 rounded-full mb-3 flex items-center justify-center space-x-2">
        <IconGoogle class="w-6 h-6"/>
        <span>Continuer avec Google</span>
      </button>
      
      <button @click="signInWithFacebook" class="w-full py-3 px-4 bg-white text-indigo-800 font-bold rounded-full mb-3 flex items-center justify-center space-x-2">
        <IconFacebook class="w-6 h-6"/>
        <span>Continuer avec Facebook</span>
      </button>
      
      <button @click="redirectToEmailLogin" class="w-full py-3 px-4 bg-indigo-800 font-bold text-white rounded-full mb-3 flex items-center justify-center space-x-2">
        <IconEmail class="w-6 h-6"/>
        <span> Continuer avec Email</span>
      </button>
      
      <div v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconGoogle from '@/components/icons/google.vue'
import IconFacebook from '@/components/icons/Iconfacebook.vue'
import IconEmail from '@/components/icons/email.vue'
import oniriz from '@/components/icons/Oniriz.vue'
import { useRouter } from 'vue-router';
import { auth, googleProvider, facebookProvider } from '@/firebase.js';
import { signInWithPopup, AuthError } from 'firebase/auth';

const router = useRouter();
const errorMessage = ref<string | null>(null);

// Connexion avec Google
const signInWithGoogle = async () => {
  try {
    console.log('Tentative de connexion avec Google...');
    const result = await signInWithPopup(auth, googleProvider);
    console.log('Utilisateur connecté avec Google:', result.user);
    router.push('/dashboard'); // Remplacez par la route vers laquelle vous voulez rediriger
  } catch (error) {
    console.error('Erreur de connexion avec Google:', error);
    handleAuthError(error);
  }
};

// Connexion avec Facebook
const signInWithFacebook = async () => {
  try {
    console.log('Tentative de connexion avec Facebook...');
    const result = await signInWithPopup(auth, facebookProvider);
    console.log('Utilisateur connecté avec Facebook:', result.user);
    router.push('/dashboard'); // Remplacez par la route vers laquelle vous voulez rediriger
  } catch (error) {
    console.error('Erreur de connexion avec Facebook:', error);
    handleAuthError(error);
  }
};

// Redirection vers la page de connexion par email
const redirectToEmailLogin = () => {
  router.push('/connexion'); // Remplacez par la route vers la page de connexion email
};

// Gestion des erreurs d'authentification
const handleAuthError = (error: AuthError) => {
  if (error.code) {
    // Message d'erreur spécifique basé sur le code d'erreur
    switch (error.code) {
      case 'auth/popup-closed-by-user':
        errorMessage.value = 'La fenêtre de connexion a été fermée avant la finalisation.';
        break;
      case 'auth/network-request-failed':
        errorMessage.value = 'Problème de connexion réseau. Veuillez réessayer.';
        break;
      case 'auth/cancelled-popup-request':
        errorMessage.value = 'La demande de popup a été annulée.';
        break;
      default:
        errorMessage.value = `Une erreur est survenue : ${error.message}`;
        break;
    }
  } else {
    errorMessage.value = 'Erreur de connexion. Veuillez réessayer.';
  }
};
</script>

