<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconFleche from '@/components/icons/fleche.vue'

const props = defineProps<{
  id: string;
  Titre: string;
  categorie: {
    cat1: string;
    cat2: string;
    cat3: string;
  }[];
  collectionId: string;
  collectionName: string;
  contenu: string;
  created: string;
  date: string;
  extrait: string;
  type: string[];
  updated: string;
}>()

</script>

<template> 
  

    <div class="p-2 ">

<div class="container">
  <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
    <div class="flex sm:contents">
      
      <div class="col-start-2 col-end-4 mr-2 sm:mx-auto relative">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
        
        </div>
        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
          <i class="fas fa-check-circle text-white"></i>
        </div>
        
      </div>



      <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
  <h3 class="font-semibold text-lg mb-1">
   {{ Titre }}
  </h3>
  
  <p class="leading-tight text-justify w-full">
    {{ extrait }} 
  </p>

 

  <div class="flex items-center space-x-2 mt-2 w-full">
              <!-- Boucle sur les catégories -->
              <template v-for="(cat, index) in props.categorie" :key="index">
                <span class="bg-gray-200 border px-3 py-1.5 rounded-2xl text-sm">{{ cat.cat1 }}</span>
                <span class="bg-gray-200 border px-3 py-1.5 rounded-2xl text-sm">{{ cat.cat2 }}</span>
                <span class="bg-gray-200 border px-3 py-1.5 rounded-2xl text-sm">{{ cat.cat3 }}</span>
              </template>
              <div class="flex-shrink-0 px-2">
                <IconFleche class="w-6 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
              </div>
  </div>
</div>



      </div>
    </div>
</div>
</div>
  </template>     
      