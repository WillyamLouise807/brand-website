<template>
  <div class="font-gotham">
    <!-- Background Image Section -->
    <div 
      class="relative w-full h-[280px] sm:h-[400px] md:h-[540px] lg:h-[680px] bg-cover bg-center bg-no-repeat"
      style="background-image: url('/ecatalog-banner.png')"
    >
      <!-- Dark Overlay (optional, untuk kontras yang lebih baik) -->
      <div class="absolute inset-0 "></div>
      
      <!-- Content Container -->
      <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div class="w-full lg:w-1/2">
          <!-- Main Title -->
          <h1 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            E-Catalogue
          </h1>

          <!-- Description -->
          <p class="text-xs sm:text-sm md:text-base lg:text-xl text-justify leading-relaxed max-w-2xl">
            Discover Glatino Premium’s product brochures, available for <br>download as your professional reference.
          </p>
        </div>
      </div>
    </div>  

    <div class="container mx-auto py-16">
      <p class="text-xl sm:text-3xl lg:text-5xl font-semibold mb-6 sm:mb-8 leading-tight">
        Our Catalogue
      </p>
      <hr class="border-gray-300 mb-12"/> 

      <div class="grid grid-cols-1 p-5 md:p-0 md:grid-cols-3 gap-6 sm:gap-8">
        <!-- GLATINO CATALOGUE -->
        <a href="/assets/catalog-glatino-premium.pdf" download>
          <div class="relative cursor-pointer">
            <img src="/catalog-glatino-cover.png" alt="" class="w-full">

            <!-- Text Overlay -->
            <div class="absolute bottom-4 left-4 text-white">
              <p class="text-lg sm:text-2xl md:text-3xl font-semibold">GLATINO PREMIUM</p>
              <p class="text-sm sm:text-base lg:text-lg font-thin">Download</p>
            </div>
          </div>
        </a>

        <!-- KOVA CATALOGUE -->
        <a href="/assets/catalog-kova-premium.pdf" download>
          <div class="relative cursor-pointer">
            <img src="/catalog-kova-cover.png" alt="" class="w-full">

            <!-- Text Overlay -->
            <div class="absolute bottom-4 left-4 text-white">
              <p class="text-lg uppercase sm:text-2xl md:text-3xl font-semibold">Smartlock By Kova</p>
              <p class="text-sm sm:text-base lg:text-lg font-thin">Download</p>
            </div>
          </div>
        </a>
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

.font-gotham {
  font-family: 'Gotham', sans-serif;
}
</style>