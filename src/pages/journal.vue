<script setup lang="ts">
import { ref } from 'vue'
import { dreams } from '../data';
import Hero from '../components/Hero.vue'
import Card from '../components/CardPage.vue'
import IconFiltre from '../components/icons/filtre.vue'


// Données pour les slides du carrousel
const slides = ref([
  {
    imgSrc: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
    title: 'Paris',
    description: 'City of love'
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1595177577134-6e8a1a87d56e',
    title: 'New York',
    description: 'The Big Apple'
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1534351590666-13e581f575b0',
    title: 'Tokyo',
    description: 'Land of the Rising Sun'
  }
]);

// Référence réactive pour l'index de la diapositive actuelle
const currentSlide = ref(0);

// Fonctions pour gérer la navigation des slides
const showSlide = (index: number) => {
  currentSlide.value = index;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value > 0) ? currentSlide.value - 1 : slides.value.length - 1;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value < slides.value.length - 1) ? currentSlide.value + 1 : 0;
};

</script>

<template> 
  <main class="main-content">

    <Hero title="Agenda" imgPath="/public/img/hero1.webp" imgAlt="Orchestre" />
    

    <h1>Page journal </h1>



<h1> Historique de rêve 

</h1>

<!-- Carrousel -->
<div class="relative max-w-4xl mx-auto overflow-hidden mt-12">
      <div v-for="(slide, index) in slides" :key="index" 
           class="carousel-item" 
           :class="{ 'active': index === currentSlide }">
        <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
          <img :src="slide.imgSrc" :alt="slide.title" class="absolute inset-0 h-full w-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 class="z-10 mt-3 text-3xl font-bold text-white">{{ slide.title }}</h3>
          <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{{ slide.description }}</div>
        </article>
      </div>
      <!-- Contrôles du carrousel -->
      <button class="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 text-white bg-black/50 rounded-full" @click="prevSlide">
        &#10094;
      </button>
      <button class="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 text-white bg-black/50 rounded-full" @click="nextSlide">
        &#10095;
      </button>
    </div>

<div class="mb-6 space-y-4 sm:mx-auto sm:w-full text-white sm:max-w-sm mt-10 m-8 flex flex-col items-start sm:flex-row justify-center gap-2">
  <!-- Barre de recherche -->
  <input 
    type="search"  
    class="w-full block  rounded-lg border border-gray-800 h-14 transparent-gradient px-3 transition duration-200 ease-in-out text-white"
    placeholder="Recherchez ici"
    aria-label="Recherchez ici"
    aria-describedby="button-addon3"  :icon="IconFiltre"/>

  <!-- Bouton Filtre -->
  <button 
    class="flex items-start rounded-lg border border-gray-800 h-12 px-6 py-2 text-sm  transition duration-150 ease-in-out " 
    type="button" 
    id="button-addon3" 
    data-te-ripple-init
  >
    Filtre
    <IconFiltre/>
  </button>
</div>

  
    

    <div class="">
    
    <Card v-for="dreams in dreams" v-bind="dreams" :key="dreams.id"/>
</div>

   

    </main>
  </template>
  
  <style scoped>
.carousel-item {
  display: none;
}
.carousel-item.active {
  display: block;
}
</style>