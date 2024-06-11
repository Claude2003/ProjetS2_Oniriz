<script setup lang="ts">
import Iconphoto from '@/components/icons/photo.vue'
import { ref } from 'vue'


// Données pour les slides du carrousel
const slides = ref([
  {
    imgSrc: 'https://github.com/Claude2003/oniriz-ext/blob/main/r212-2024-tp2-tdc-Claude2003-main/public/img/voyage_spacial.webp',
    title: 'voyage Spacial',
    description: '01 Mai 2024'
  },
  {
    imgSrc: 'https://github.com/Claude2003/oniriz-ext/blob/main/r212-2024-tp2-tdc-Claude2003-main/public/img/bal_maque.webp',
    title: 'Le Bal Masqué',
    description: '10 Avril 2024'
  },
  {
    imgSrc: 'https://github.com/Claude2003/oniriz-ext/blob/main/r212-2024-tp2-tdc-Claude2003-main/public/img/ville_inondee.webp',
    title: 'La Ville Inodée',
    description: '02 Mai 2024'
  },
  {
    imgSrc: 'https://github.com/Claude2003/oniriz-ext/blob/main/r212-2024-tp2-tdc-Claude2003-main/public/img/maison_hant%C3%A9e.jpg',
    title: 'La Maison Hantée',
    description: '01 Avril 2024'
  },
  {
    imgSrc: 'https://github.com/Claude2003/oniriz-ext/blob/main/r212-2024-tp2-tdc-Claude2003-main/public/img/foret_hantee.webp',
    title: 'La Forêt Enchantée',
    description: '01 Avril 2024'
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
  
<div class="w-full ">
    
    <div
        class=" mx-auto rounded-sm bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzExMTExMzEzfDA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
       
        <div
            class="mx-auto flex justify-center w-[141px] h-[141px] rounded-full bg-[url('https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">

            <div class="bg-white rounded-full w-6 h-6 text-center ml-28 mt-4">

                <input type="file" name="profile" id="upload_profile" hidden required>

                <label for="upload_profile" class="inline-flex items-center">
                            <Iconphoto/>
                        </label>
            </div>
        </div>
        <div class="flex justify-end mb-6">
            
            <input type="file" name="profile" id="upload_cover" hidden required>

            <div class="bg-white flex items-center gap-1 rounded-tl-md px-2 font-semibold">
                <label for="upload_cover" class="inline-flex gap-1 items-center cursor-pointer">Cover
                        
                  <Iconphoto/>
                </label>
            </div>

        </div>
    </div>
</div>

<div class="flex-grow text-center mb-6  md:text-left">
                <h3 class="text-2xl heading"> Camille Duval</h3>
                <p class="font-bold">Rêveuse Curieuse</p>
                
                <p class="mt-2 mb-3">Passionnée par les mystères de l'inconscient, je me plonge chaque nuit dans les méandres de mes rêves. Chaque matin est une nouvelle aventure à décrypter.</p>
                
                <div class=" items-center mb-6 space-x-4 mt-2 w-full">
                
                  <span class="bg-violet-500  px-3 py-1.5 rounded-lg text-sm">Curieuse</span>
                    <span class="bg-violet-500   px-3 py-1.5 rounded-lg text-sm">Créative </span> 
                    <span class="bg-violet-500   px-3 py-1.5 rounded-lg text-sm">Réfléchie</span>
                </div>
            </div>
        
            <ul class="py-4 mt-2 text-white flex items-center justify-around">
    <li class="flex flex-col items-center justify-around">
        <strong>Rêves enregistrés</strong>
        <div>2k</div>
    </li>
    <li class="flex flex-col items-center justify-between">
        <strong>Rêves interprétés</strong>
        <div>10k</div>
    </li>
    <li class="flex flex-col items-center justify-around">
        <strong>Images générées</strong> 
        <div>15</div>
    </li>
</ul>
<h2 class="m-6"> Rêves récents </h2>


<div class="relative max-w-4xl mx-auto overflow-hidden">
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
      
      <button class="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 text-white bg-black/50 rounded-full" @click="prevSlide">
        <
      </button>
      <button class="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 text-white bg-black/50 rounded-full" @click="nextSlide">
        >
      </button>
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
    https://tailwindflex.com/@sammytg7/profile-form-3
</template>

<style scoped>
.carousel-item {
  display: none;
}
.carousel-item.active {
  display: block;
}
</style>