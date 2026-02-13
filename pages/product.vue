<template>
  <div class="font-gotham">
    <!-- Background Image Section -->
    <BannerProduct />      

    <div class="container mx-auto py-16 font-gotham">
      <!-- Breadcrumb -->
      <div class="mb-8">
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
          </ol>
        </nav>
      </div>

      
      <!-- Filter Section -->
      <section>
        <!-- Red Background -->
        <div class="bg-red-600 rounded-3xl w-full py-12 text-center relative">
          <h1 class="text-white text-4xl mb-12">
            FIND OUR PRODUCTS
          </h1>
        </div>

        <!-- Dark Red Background -->
        <div class="bg-red-900 -mt-10 relative
              grid grid-cols-[1fr_1fr_1fr_1fr_auto] 
              items-end
              gap-2
              rounded-3xl 
              max-w-7xl
              mx-auto
              px-8 py-6">
          <div class="text-white">
            <p>Product Categories</p>
            <select class="w-full rounded-md px-3 py-1 text-sm text-black">
              <option>All</option>
              <option>$DATABASE</option>
            </select>
          </div>
          <div class="text-white">
            <p>Finishing</p>
            <select class="w-full rounded-md px-3 py-1 text-sm text-black">
              <option>All</option>
              <option>$DATABASE</option>
            </select>
          </div>
          <div class="text-white">
            <p>Material</p>
            <select class="w-full rounded-md px-3 py-1 text-sm text-black">
              <option>All</option>
              <option>$DATABASE</option>
            </select>
          </div>
          <div class="text-white">
            <p>Product Name / Code</p>
            <input type="text" class="w-full rounded-md px-3 py-1 text-sm text-black" placeholder="Search...">
            <!-- <option>$DATABASE</option> -->
          </div>
          <div class=" bg-red-600 text-white items-center flex justify-center rounded-xl h-8 w-8">
            <p></p>
            <button>
              <svg viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg">

              <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
            </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Filter tidak aktif page ini muncul -->
      <h1 class="font-semibold text-3xl text-center py-12">Categories (Filter tidak Aktif)</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center items-center">
        <div>
          <!-- Ganti h-80 dengan tinggi yang diinginkan -->
          <div class="relative w-full h-[500px] rounded-2xl overflow-hidden group cursor-pointer border-4 border-red-100 shadow-lg shadow-red-300/50">
            <!-- Background Image -->
            <div 
              class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              :style="{ backgroundImage: 'url(/cover-catalog/handle-roses.png)' }"
            >
              <!-- Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <!-- Information Box - Positioned at bottom -->
            <div class="absolute bottom-0 left-0 right-0">
              <div class="bg-white/80 backdrop-blur-sm rounded-t-xl py-4 px-6 flex items-center justify-between shadow-lg">
                <!-- Left Side - Text Information -->
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900 mb-1">HANDLE ROSES $DATABASE</h3>
                  <p class="text-gray-600 text-sm">View Product</p>
                </div>

                <!-- Right Side - Arrow Icon -->
                <div class="ml-4">
                  <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <img 
                      src="/arrow.png" 
                      alt="Arrow" 
                      class="w-6 h-6 filter invert brightness-0 text-white"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div>
          1
        </div>
        <div>
          1
        </div> -->
      </div>

      <!-- Filter aktif page ini muncul -->
      <h1 class="font-semibold text-3xl text-center py-12">(Filter Aktif)</h1>

      <!-- Breadcrumb -->
      <div class="mb-8 font-gotham">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2">
            <li class="inline-flex items-center">
              <a href="#" class="text-sm text-black hover:text-gray-900">($DATABASE) PRODUCT AVAILABLE</a>
            </li>            
          </ol>
        </nav>
      </div>
            
      <div class="grid grid-cols-5 gap-8 justify-center items-center">
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
            <p class="text-center py-6 px-4 m-0 uppercase font-semibold text-xl">
              Handle Roses 201 HR-201 $DATABASE
            </p>
          </div>
        </div>
      </div>
    </div>    

    <!-- You can add more content here if needed -->
    <!-- <div class="container mx-auto h-16">

    </div> -->

  </div>
  <FooterComponent />
</template>

<script setup>
// You can add any reactive data or methods here if needed
import FooterComponent from '~/components/footer.vue'
import BannerProduct from '~/components/banner-product.vue';
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