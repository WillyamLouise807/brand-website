<template>
  <div class="font-gotham">
    <!-- Background Image Section -->
    <div class="relative w-full h-[340px] bg-cover bg-center bg-no-repeat"
      style="background-image: url('/detail-catalog.png')">

      <!-- Overlay merah -->
      <div class="absolute inset-0 bg-[#ED1D25]/65"></div>

      <!-- Content -->
      <div class="relative z-10 h-full flex items-center justify-center">
        <h1 class="text-3xl lg:text-5xl font-semibold text-white text-center">
          $CATALOG
        </h1>
      </div>
    </div>

    <div class="container mx-auto py-16">
        <p class="text-5xl font-semibold">
          Product
        </p>

        <!-- Breadcrumb -->
      <div class="py-8">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2">
            <li class="inline-flex items-center">
              <a href="#" class="text-sm text-black hover:text-gray-900">HOME</a>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>

                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <a href="#" class="ml-2 text-sm text-black hover:text-gray-900">PRODUCT</a>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>

                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <a href="#" class="ml-2 text-sm text-black hover:text-gray-900">$CATALOG</a>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>

                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <a href="#" class="ml-2 text-sm text-black hover:text-gray-900">$PRODUCT_NAME</a>
              </div>
            </li>
          </ol>
        </nav>        
      </div>
      <div class="grid grid-cols-[8%_38%_24%_30%] gap-2 my-20">

        <!-- ================= 15% THUMBNAIL ================= -->        
        <div class="flex items-center justify-center">
          <div class="p-4 h-[320px] overflow-y-auto custom-scroll">
            
            <div
              v-for="(img, index) in images"
              :key="index"
              class="mb-4 cursor-pointer flex justify-center transition duration-300"
              @click="selectedImage = img"
            >
              <img
                :src="img"
                class="h-[90px] object-contain transition duration-300"
                :class="selectedImage === img 
                  ? 'opacity-100 scale-105' 
                  : 'opacity-50 hover:opacity-80'"
              />
            </div>
          </div>
        </div>

        <!-- ================= 35% PREVIEW ================= -->
        <div class="flex items-center justify-center bg-white">
          <div class="w-[400px] h-[500px] flex items-center justify-center overflow-hidden">
            <img 
              :src="selectedImage" 
              class="max-w-full max-h-full object-contain transition duration-300"
            />
          </div>
        </div>

        <!-- ================= 25% SECTION INFO PRODUK ================= -->        
        <div class="py-10 flex flex-col justify-between h-full">

          <!-- PRODUCT NAME -->
          <div>
            <h3 class="text-2xl font-bold tracking-widest">
              PRODUCT NAME
            </h3>
            <p class="mt-3 text-xl tracking-wide">
              $NAME
            </p>
          </div>

          <!-- COLOR -->
          <div>
            <h3 class="text-2xl font-bold tracking-widest">
              COLOR
            </h3>
            <p class="mt-3 text-xl tracking-wide">
              $COLOR
            </p>
          </div>

          <!-- MATERIAL -->
          <div>
            <h3 class="text-2xl font-bold tracking-widest">
              MATERIAL
            </h3>
            <p class="mt-3 text-xl tracking-wide">
              $MATERIAL
            </p>
          </div>
        </div>

        <!-- ================= 25% SECTION INFO KANAN ================= -->        
        <div class="pt-10 flex flex-col justify-between h-full">

          <!-- PRODUCT CODE -->
          <div>
            <h3 class="text-2xl font-bold uppercase tracking-[2px]">
              PRODUCT CODE
            </h3>
            <p class="mt-3 text-xl tracking-wide">
              $CODE
            </p>
          </div>

          <!-- DIMENSION -->
          <div class="mt-10">
            <h3 class="text-2xl font-bold uppercase tracking-[2px] mb-6">
              DIMENSION
            </h3>

            <div class="w-[370px] h-[300px] flex items-center justify-center overflow-hidden">
              <img 
                :src="'/produk/ukuran.png'" 
                class="max-w-full max-h-full object-contain transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <hr class="border-gray-300"/>

      <h1 class="text-4xl text-center font-semibold text-gray-500 py-10">OUR GLATINO PREMIUM PRODUCTS YOU MAY WANT TO EXPLORE</h1>
    </div>
  </div>
  
  <FooterComponent />
</template>

<script lang="ts" setup>
import FooterComponent from '~/components/footer.vue'
import { ref } from 'vue'

const images = [
  '/produk/1.png',
  '/produk/2.png',
  '/produk/3.png',
  '/produk/4.png',
  '/produk/5.png',
]

const selectedImage = ref(images[0]!)
</script>

<style>
.font-gotham {
  font-family: 'Gotham', sans-serif;
}

/* ===== SCROLLBAR UTAMA ===== */
.custom-scroll::-webkit-scrollbar {
  width: 14px;
}

/* Hilangkan arrow */
.custom-scroll::-webkit-scrollbar-button {
  display: none;
}

/* Track (background scrollbar) */
.custom-scroll::-webkit-scrollbar-track {
  background: #eeeeee;
  border-radius: 20px;
}

/* Thumb (yang digeser) */
.custom-scroll::-webkit-scrollbar-thumb {
  background: #9e9e9e;
  border-radius: 20px;
  border: 3px solid #eeeeee; /* INI yang bikin jarak */
  background-clip: padding-box;
}

/* Hover effect */
.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: #9e9e9e;
}

/* Firefox support */
.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: #bdbdbd #eeeeee;
}

</style>