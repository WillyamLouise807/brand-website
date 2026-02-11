<template>
  <div class="font-poppins">
    <!-- Background Image Section -->
    <div 
      class="relative w-full h-[680px] bg-cover bg-center bg-no-repeat"
      style="background-image: url('/ecatalog-banner.png')"
    >
      <!-- Dark Overlay (optional, untuk kontras yang lebih baik) -->
      <div class="absolute inset-0 "></div>
      
      <!-- Content Container -->
      <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div class="w-full lg:w-1/2">
          <!-- Main Title -->
          <h1 class="text-2xl lg:text-5xl font-semibold mb-8 leading-tight">
            E-Catalogue
          </h1>
          
          <!-- Description -->
          <p class="text-sm lg:text-xl text-justify leading-relaxed max-w-2xl">
            Discover Glatino Premium’s product brochures, available for <br>download as your professional reference.
          </p>
        </div>
      </div>
    </div>  

    <div class="container mx-auto py-16">
      <p class="text-2xl lg:text-5xl font-semibold mb-8 leading-tight">
        Our Catalogue
      </p>
      <hr class="border-gray-300 mb-12"/> 

      <div class="grid grid-cols-3 gap-8">
        <div class="relative">
          <img src="/catalog.png" alt="" class="w-full">

          <!-- Text Overlay -->
          <div class="absolute bottom-4 left-4 text-white">
            <p class="text-3xl font-semibold">GLATINO PREMIUM</p>
            <p class="text-lg font-thin">Download</p>
          </div>
        </div>        
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
// You can add any reactive data or methods here if needed
import FooterComponent from '~/components/footer.vue'
</script>

<style scoped>
/* Prevent text selection */
.font-poppins {
  font-family: 'Poppins', sans-serif;
}


</style>