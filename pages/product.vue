<template>
  <div class="font-poppins">
    <!-- Background Image Section -->
    <div 
      class="relative w-full h-[680px] bg-cover bg-center bg-no-repeat"
      style="background-image: url('/product.png')"
    >
      <!-- Dark Overlay (optional, untuk kontras yang lebih baik) -->
      <div class="absolute inset-0 "></div>
      
      <!-- Content Container -->
      <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div class="w-full lg:w-1/2">
          <!-- Main Title -->
          <h1 class="text-2xl lg:text-4xl font-semibold mb-8 leading-tight">
            Products
          </h1>
          
          <!-- Description -->
          <p class="text-sm lg:text-lg text-justify leading-relaxed max-w-2xl">
            Architects, contractors, and designers can find a complete range of door, glass, and window hardware for residential and commercial projects within the <span class="font-semibold">Glatino Premium</span> product collection.
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-16 font-poppins">
      <div class="flex flex-row gap-1 pb-10">
        <div>HOME</div>
        <div>/</div>
        <div>PRODUCT</div>
        <div>/</div>
        <div>$CATALOG (filter aktif)</div>
      </div>
      <div class="bg-red-600 rounded-3xl w-full">
        <div class="text-white text-4xl text-center py-12 pb-32">FIND OUR PRODUCTS</div>
      </div>
      <div class="bg-red-800 flex flex-row text-white rounded-xl py-6 items-center justify-between">
        <div>
          <p>Product Categories</p>
          All
        </div>
        <div>
          <p>
            Finishing
          </p>
          All
        </div>
        <div>
          <p>Material</p>
          All
        </div>
        <div>
          <p>Product Name / Code</p>
          All
        </div>
        <div>
          <p></p>
          Search
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