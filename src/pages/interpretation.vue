<script setup lang="ts">
import { ref } from 'vue'
import Hero from '../components/Hero.vue'
const userMessage = ref('')
const userEmotion = ref('')
const userAmbiance = ref('')
const apiResponse = ref('')

const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: userMessage.value, 
        emotion: userEmotion.value, 
        ambiance: userAmbiance.value 
      }),
    })

    const data = await response.json()
    apiResponse.value = data.response
  } catch (error) {
    console.error('Error:', error)
    apiResponse.value = 'An error occurred while fetching the response.'
  }
}
</script>

<template>
  
  <main> 

    <Hero title="Interpréter votre rêve" imgPath="/public/img/Cover_inter.webp" imgAlt="nuit" />

    <div class="bg-purple-500 m-6 text-white p-4 rounded-lg mb-6">
      <h1 class="text-center mb-4">Avertissement !</h1> 
      
      <p> Les rêves ont des significations symboliques et peuvent fournir un aperçu des pensées et des émotions subconscientes d'une personne. Cependant, il n'existe pas d'interprétation universelle des rêves et la signification d'un rêve peut être très subjective.
    </p>
      </div>

      <form @submit.prevent="handleSubmit" class="mb-4 m-6">
        <div class="mb-4">
          <textarea 
            v-model="userMessage"
            class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-zinc-500 text-base focus:outline-none focus:shadow-outline"
            placeholder="Entrer le contenu de votre rêve"
            rows="5"
          ></textarea>
        </div>
        <div class="mb-4">
          <h2 class="mb-4"> Entrer vos émotions </h2>
          <textarea 
            v-model="userEmotion"
            class="appearance-none border rounded-xl w-full py-2 px-6 text-zinc-500 font-semibold text-base focus:outline-none focus:shadow-outline"
            placeholder="Ajouter des émotions"
            rows="2"
          ></textarea>
        </div>

        <div class="mb-4">

          <h2 class="mb-4"> Décrire l’ambiance </h2>
          <textarea 
            v-model="userAmbiance"
            class=" appearance-none border rounded-xl w-full py-2 px-6 text-zinc-500 font-semibold text-base focus:outline-none focus:shadow-outline"
            placeholder="Quelle ambiance ? "
            rows="2"
          ></textarea>
        </div>
        <div class="flex items-center justify-center h-full">
  <button 
    type="submit" 
    class="border-violet-300 bg-violet-300 px-12 py-4 rounded-xl text-lg text-black font-bold focus:outline-none focus:shadow-outline"
  >
    Obtenir une interprétation
  </button>
</div>


      </form>
      <div v-if="apiResponse" class="mt-4 p-4 bg-gray-500 rounded">
        <p>{{ apiResponse }}</p>
      </div>
  
    </main>

</template>