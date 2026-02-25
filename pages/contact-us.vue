<template>
  <div class="font-gotham">
    <!-- Background Image Section -->
    <div
      class="relative w-full h-[280px] sm:h-[400px] md:h-[540px] lg:h-[680px] bg-cover bg-center bg-no-repeat"
      style="background-image: url('/contact-us.png')"
    >
      <div class="absolute inset-0"></div>

      <!-- Content Container -->
      <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div class="w-full lg:w-1/2">
          <h1 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Contact Us
          </h1>
          <p class="text-xs sm:text-sm md:text-base lg:text-xl text-justify leading-relaxed max-w-2xl">
            Get the latest price? We'll respond as soon as possible (within 12 hours)
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto font-gotham">
    <!-- 3 logo icons — flex agar tidak rusak di mobile -->
    <div class="flex justify-center gap-6 sm:gap-12 md:gap-20 -translate-y-1/2 px-4">
      <div class="flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[180px] bg-white rounded-full shadow-lg">
        <img src="/contact-logo-1.png" alt="" class="w-full h-auto">
      </div>
      <div class="flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[180px] bg-white rounded-full shadow-lg">
        <img src="/contact-logo-2.png" alt="" class="w-full h-auto">
      </div>
      <div class="flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[180px] bg-white rounded-full shadow-lg">
        <img src="/contact-logo-3.png" alt="" class="w-full h-auto">
      </div>
    </div>

    <!-- 3 contact cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-0">
      <div>
        <img src="/contact-1.png" alt="" class="w-full h-auto">
        <p class="text-center bg-[#ED1D25] text-white rounded-xl py-4 sm:py-6 text-sm sm:text-base">0889-8349-4764</p>
      </div>
      <div>
        <img src="/contact-1.png" alt="" class="w-full h-auto">
        <p class="text-center bg-[#ED1D25] text-white rounded-xl py-4 sm:py-6 text-sm sm:text-base">0889-8349-4764</p>
      </div>
      <div>
        <img src="/contact-1.png" alt="" class="w-full h-auto">
        <p class="text-center bg-[#ED1D25] text-white rounded-xl py-4 sm:py-6 text-sm sm:text-base">glatinopremium@gmail.com</p>
      </div>
    </div>

    <hr class="border-gray-300 mt-8 sm:mt-12"/>

    <h1 class="text-lg sm:text-xl md:text-2xl text-center font-semibold text-gray-600 py-8 sm:py-10">
      Get in Touch With Glatino Premium
    </h1>
    <EmailComponent />
  </div>

  <FooterComponent />
</template>

<script lang="ts" setup>
import EmailComponent from '~/components/email.vue'
import FooterComponent from '~/components/footer.vue'
</script>

<style>
.font-gotham {
  font-family: 'Gotham', sans-serif;
}
</style>
