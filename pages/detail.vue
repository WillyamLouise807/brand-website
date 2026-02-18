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
          CATALOG$DATABASE
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
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.font-gotham {
  font-family: 'Gotham', sans-serif;
}
</style>