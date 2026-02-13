<template>
  <div class="font-gotham">
    <!-- Background Image Section -->
    <div 
      class="relative w-full h-[680px] bg-cover bg-center bg-no-repeat"
      style="background-image: url('/contact-us.png')"
    >
      <!-- Dark Overlay (optional, untuk kontras yang lebih baik) -->
      <div class="absolute inset-0 "></div>
      
      <!-- Content Container -->
      <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div class="w-full lg:w-1/2">
          <!-- Main Title -->
          <h1 class="text-2xl lg:text-5xl font-semibold mb-8 leading-tight">
            Contact Us
          </h1>
          
          <!-- Description -->
          <p class="text-sm lg:text-xl text-justify leading-relaxed max-w-2xl">
            Get the latest price? We'll respond as soon as <br>possible (within 12 hours)
          </p>
        </div>
      </div>
    </div>    
  </div>

  <div class="container mx-auto">
    <!-- Gunakan transform translate untuk positioning yang lebih presisi -->
    <div class="grid grid-cols-3 justify-items-center transform -translate-y-1/2">
      <div class="bg-white rounded-full shadow-lg"> <!-- Tambah background dan shadow -->
        <img src="/contact-logo-1.png" alt="" class="w-full h-auto">
      </div>
      <div class="bg-white rounded-full shadow-lg"> <!-- Tambah background dan shadow -->
        <img src="/contact-logo-2.png" alt="" class="w-full h-auto">
      </div>
      <div class="bg-white rounded-full shadow-lg"> <!-- Tambah background dan shadow -->
        <img src="/contact-logo-3.png" alt="" class="w-full h-auto">
      </div>      
    </div>
  </div>

  <FooterComponent />
</template>

<script lang="ts" setup>
import FooterComponent from '~/components/footer.vue'
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.font-gotham {
  font-family: 'Gotham', sans-serif;
}
</style>