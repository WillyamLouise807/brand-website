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