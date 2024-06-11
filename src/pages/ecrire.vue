<script setup lang="ts">
import { ref } from 'vue';
import Hero from '@/components/Hero.vue'
import IconDate from '@/components/icons/IconDate.vue'
import vector from '@/components/icons/Vector.vue'
import Button from '@/components/Button.vue'
const dreamText = ref<string>('');
const dreamClarity = ref<string>('');
const dreamAmbiance = ref<string>('');
const keywords = ref<string>('');

const clarities = ['Flou', 'Vague', 'Réaliste', 'Lucide'];
const ambiances = ['Négative', 'Plaisante', 'Positive'];

const submitForm = () => {
  console.log("Rêve:", dreamText.value);
  console.log("Clarté du rêve:", dreamClarity.value);
  console.log("Ambiance du rêve:", dreamAmbiance.value);
  console.log("Mots-clés:", keywords.value.split(',').map(keyword => keyword.trim()));

  // Réinitialiser le formulaire après soumission
  dreamText.value = '';
  dreamClarity.value = '';
  dreamAmbiance.value = '';
  keywords.value = '';
};
</script>



<template>
  <main>


    <Hero title="Entrer un rêve" imgPath="/public/img/ecrire.webp" imgAlt="nuit" />

    <div class="flex items-center m-6">
    <IconDate  />
    <span class="ml-2">Aujourd'hui</span>
  </div>
   <div class="m-6 space-y-3">  
          <h2> Type</h2> 
          <p>Sélectionner le type de rêve</p>
         </div> 
          <div class="space-x-2 text-center">

                <span class="bg-violet-500  px-3 py-1.5 rounded-2xl text-sm font-semibold">Lucide</span>
                <span class="bg-violet-500  px-3 py-1.5 rounded-2xl text-sm font-semibold">Cauchemar</span>
                <span class="bg-violet-500  px-3 py-1.5 rounded-2xl text-sm font-semibold"> Surréaliste</span>
                <span class="bg-violet-500  px-3 py-1.5 rounded-2xl text-sm font-semibold"> Réccurent</span>
   </div>

    <div class="max-w-md mx-auto  p-6">
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          
          <textarea
            id="dream"
            v-model="dreamText"
            class="w-full px-3 py-2 border rounded-xl font-bold text-zinc-500 focus:outline-none focus:ring "
            rows="5"
            placeholder="De quoi avez-vous rêvé ?"
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="keywords" class="block text-white text-xl font-bold mb-2">Mots-clés :</label>
          <input
            id="keywords"
            type="text"
            v-model="keywords"
            class="w-full px-3 py-3 border rounded-xl font-bold text-zinc-500 focus:outline-none focus:ring "
            placeholder="Entrer des mots clés"
          />
        </div>
        
        <div class="mb-4">
          <label class="block text-white text-xl font-bold mb-2">Clarté du rêve :</label>
          <div class="flex flex-col space-y-4">
            <button
              v-for="clarity in clarities"
              :key="clarity"
              @click="dreamClarity = clarity"
              :class="{ 'bg-violet-500 text-white': dreamClarity === clarity, 'bg-white font-bold text-black ': dreamClarity !== clarity }"
              class="flex items-center justify-between px-4 py-3 rounded-xl font-bold focus:outline-none focus:ring focus:border-blue-300"
            >
            <span>  {{ clarity }} </span> 
              <span> <vector /> </span> 
            </button>
          </div>
        </div>

        <div class="mb-4">
  <label class="block text-white text-xl font-bold mb-2">Ambiance du rêve :</label>
  <div class="flex flex-col space-y-4">
    <button
      v-for="ambiance in ambiances"
      :key="ambiance"
      @click="dreamAmbiance = ambiance"
      :class="{ 'bg-violet-500 text-white': dreamAmbiance === ambiance, 'bg-white font-bold text-black ': dreamAmbiance !== ambiance }"
      class="flex items-center justify-between px-4 py-3 rounded-xl font-bold focus:outline-none focus:ring focus:border-blue-300"
    >
      <span>{{ ambiance }}</span>
      <span><vector /></span> 
    </button>
  </div>
</div>

<div class="flex items-center justify-center mt-8 h-full">
        <button type="submit" class=" bg-violet-300 text-black text-lg font-bold py-3 px-6 rounded-xl ">
          Enregistrer
        </button>
      </div>
      </form>
    </div>

    <div>
      <article class="relative flex flex-col justify-end overflow-hidden rounded-2xl w-full px-4 pb-8 pt-40 max-w-sm mx-auto mt-24">
  <img src='/public/img/Rectangle.webp' alt="Titre de l'image" class="absolute inset-0 h-full w-full object-cover">
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
  <h3 class="z-10 mt-3 text-2xl font-bold text-white">Voulez-vous une interprétation à ce rêve ? 
  </h3>
  <div class="z-10 mt-2" >
  <Button variant="dark" text="Interpréter" size="medium" url="/interpretation"  />
</div>
</article>

    </div>
  </main>
</template>



        


        

