<template>
  <div class="font-gotham">
    <!-- Background Image Section -->
    <div class="relative w-full h-[340px] bg-[#ED1D25] overflow-hidden">

      <!-- Image layer -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('/detail-catalog.png')"
      ></div>

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

      <div class="py-20 px-4">
        <!-- Header Section -->
        <div class="text-center mb-12">    
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Choose Your Marketplace</h1>
          <p class="text-gray-500 max-w-md mx-auto">Find our products on your favorite marketplace</p>
        </div>
        
        <!-- Marketplace Cards -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          
          <!-- Shopee Card -->
          <a 
            href="https://shopee.co.id/yourstore" 
            target="_blank"
            class="group relative w-full sm:w-64 p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(238,77,45,0.15)] hover:border-orange-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          > 
            <!-- Glow Effect -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative flex flex-col items-center">
              <div class="w-20 h-20 mb-5 p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 group-hover:scale-110 transition-transform duration-500">
                <img src="/shopee-icon.png" alt="Shopee" class="w-full h-full object-contain">
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Shopee</h3>
              <p class="text-sm text-gray-500 mb-4">Official Store</p>
              <span class="inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:gap-3 transition-all duration-300">
                Kunjungi Toko
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </div>
          </a>

          <!-- Divider -->
          <div class="hidden sm:flex flex-col items-center gap-3 text-gray-300">
            <div class="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <span class="text-xs font-medium text-gray-400">or</span>
            <div class="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          </div>

          <!-- Tokopedia Card -->
          <a 
            href="https://tokopedia.com/yourstore" 
            target="_blank"
            class="group relative w-full sm:w-64 p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(3,168,87,0.15)] hover:border-green-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          >
            <!-- Glow Effect -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative flex flex-col items-center">
              <div class="w-20 h-20 mb-5 p-4 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 group-hover:scale-110 transition-transform duration-500">
                <img src="/tokopedia-icon.png" alt="Tokopedia" class="w-full h-full object-contain">
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Tokopedia</h3>
              <p class="text-sm text-gray-500 mb-4">Official Store</p>
              <span class="inline-flex items-center gap-2 text-sm font-medium text-green-600 group-hover:gap-3 transition-all duration-300">
                Kunjungi Toko
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </div>
          </a>

        </div>

        <!-- Trust Badge -->
        <div class="flex items-center justify-center gap-6 mt-12 text-gray-400">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span class="text-sm">100% Original</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
            </svg>
            <span class="text-sm">Fast Shipping</span>
          </div>
        </div>
      </div>

      <hr class="border-gray-300"/>

      <section>
        <h1 class="text-4xl text-center font-semibold text-gray-500 py-36">OUR GLATINO PREMIUM PRODUCTS YOU MAY WANT TO EXPLORE</h1>

        <div class="grid grid-cols-4 gap-8 justify-center items-center">
          <div class="relative w-full h-[400px] rounded-3xl overflow-hidden group cursor-pointer border-4 border-red-100 shadow-lg shadow-red-300/50 flex flex-col">
            <!-- Gambar area - flex-1 mengisi sisa ruang -->
            <div class="flex-1 relative">
              <img 
                src="/produk/201.png" 
                alt="Handle Roses"
                class="absolute inset-0 w-full h-full object-cover"
              >
            </div>
            
            <!-- Informasi produk di bagian bawah - tinggi otomatis sesuai content -->
            <div class="bg-gray-100 rounded-t-3xl">
              <p class="text-center py-6 px-4 m-0 uppercase font-bold text-xl">
                Handle Roses 201 HR-201 $DATABASE
              </p>
            </div>
          </div>
          <div class="relative w-full h-[400px] rounded-3xl overflow-hidden group cursor-pointer border-4 border-red-100 shadow-lg shadow-red-300/50 flex flex-col">
            <!-- Gambar area - flex-1 mengisi sisa ruang -->
            <div class="flex-1 relative">
              <img 
                src="/produk/201.png" 
                alt="Handle Roses"
                class="absolute inset-0 w-full h-full object-cover"
              >
            </div>
            
            <!-- Informasi produk di bagian bawah - tinggi otomatis sesuai content -->
            <div class="bg-gray-100 rounded-t-3xl">
              <p class="text-center py-6 px-4 m-0 uppercase font-bold text-xl">
                Handle Roses 201 HR-201 $DATABASE
              </p>
            </div>
          </div>
          <div class="relative w-full h-[400px] rounded-3xl overflow-hidden group cursor-pointer border-4 border-red-100 shadow-lg shadow-red-300/50 flex flex-col">
            <!-- Gambar area - flex-1 mengisi sisa ruang -->
            <div class="flex-1 relative">
              <img 
                src="/produk/201.png" 
                alt="Handle Roses"
                class="absolute inset-0 w-full h-full object-cover"
              >
            </div>
            
            <!-- Informasi produk di bagian bawah - tinggi otomatis sesuai content -->
            <div class="bg-gray-100 rounded-t-3xl">
              <p class="text-center py-6 px-4 m-0 uppercase font-bold text-xl">
                Handle Roses 201 HR-201 $DATABASE
              </p>
            </div>
          </div>
          <div class="relative w-full h-[400px] rounded-3xl overflow-hidden group cursor-pointer border-4 border-red-100 shadow-lg shadow-red-300/50 flex flex-col">
            <!-- Gambar area - flex-1 mengisi sisa ruang -->
            <div class="flex-1 relative">
              <img 
                src="/produk/201.png" 
                alt="Handle Roses"
                class="absolute inset-0 w-full h-full object-cover"
              >
            </div>
            
            <!-- Informasi produk di bagian bawah - tinggi otomatis sesuai content -->
            <div class="bg-gray-100 rounded-t-3xl">
              <p class="text-center py-6 px-4 m-0 uppercase font-bold text-xl">
                Handle Roses 201 HR-201 $DATABASE
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="py-16"></div>
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