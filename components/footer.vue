<template>
  <footer class="bg-red-950 text-white font-poppins">
    <!-- Main Footer Content -->
    <div class="max-w-screen-2xl mx-auto w-full px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <!-- Logo and Stay in the Know Section -->
        <div class="col-span-1">
          <!-- Logo -->
          <div class="mb-8">
            <img 
              src="/logo.png" 
              alt="Glatino Premium" 
              class="h-16 mb-4"
            >
            <p class="text-red-500 text-sm font-medium">PROFESSIONAL QUALITY</p>
          </div>
          
          <!-- Stay in the Know -->
          <div class="mb-8">
            <h3 class="text-white text-lg font-semibold mb-4">STAY IN THE KNOW</h3>
            <div class="flex space-x-4">
              <a 
                href="#" 
                class="w-auto h-auto rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <img src="/wa-icon.png" alt="WhatsApp" class="w-8 h-8">
              </a>
              <a 
                href="#" 
                class="w-auto h-auto rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
              >
                <img src="/instagram-icon.png" alt="Instagram" class="w-8 h-8">
              </a>
            </div>
          </div>

          <!-- Our Marketplace -->
          <div>
            <h3 class="text-white text-lg font-semibold mb-4">OUR MARKETPLACE</h3>
            <div class="flex space-x-4">
              <a 
                href="#" 
                class="w-auto h-auto rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <img src="/shopee-icon.png" alt="Shopee" class="w-8 h-8">
              </a>
              <a 
                href="#" 
                class="w-auto h-auto rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <img src="/tokopedia-icon.png" alt="Tokopedia" class="w-8 h-8">
              </a>
            </div>
          </div>
        </div>

        <!-- Product Section -->
        <div class="col-span-1">
          <h3 class="text-white text-lg font-semibold mb-6">PRODUCT</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Door Lock
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Mortise Lock
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Cylinder
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Floor Hinge
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Patch Fitting
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Glass Accessories
              </a>
            </li>
          </ul>
        </div>

        <!-- Company Section -->
        <div class="col-span-1">
          <h3 class="text-white text-lg font-semibold mb-6">COMPANY</h3>
          <div class="text-gray-300 text-sm leading-relaxed">
            <p class="mb-1">PT. GLOBAL BESTINDO JAYA</p>
          </div>
        </div>

        <!-- Contact Us Section -->
        <div class="col-span-1">
          <h3 class="text-white text-lg font-semibold mb-6">CONTACT US</h3>
          <div class="text-gray-300 text-sm leading-relaxed space-y-4">
            <!-- Address -->
            <div>
              <p>Jurumudi Batuceper Km.19</p>
              <p>No.37 Kota Tangerang,</p>
              <p>Banten 15000 Indonesia</p>
            </div>
            
            <!-- Phone -->
            <div>
              <p class="mb-1">Phone: +62 2138764 362</p>
            </div>
            
            <!-- Email -->
            <div>
              <p class="mb-1">Email:</p>
              <a 
                href="mailto:glatinopremium@gmail.com" 
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                glatinopremium@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Copyright Section -->
    <div class="bg-red-800 py-4">
      <div class="container mx-auto px-6">
        <p class="text-center text-white text-sm">
          COPYRIGHT © 2026 GLATINO PREMIUM | PT. GLOBAL BESTINDO JAYA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// You can add any reactive data or methods here if needed
</script>

<style scoped>
/* Additional styling if needed */
a {
  transition: all 0.3s ease;
}

/* Ensure proper spacing and alignment */
.container {
  max-width: 1200px;
}

/* Custom hover effects */
.hover\:bg-green-600:hover {
  background-color: rgb(22 163 74);
}

.hover\:bg-orange-600:hover {
  background-color: rgb(234 88 12);
}

.hover\:bg-green-700:hover {
  background-color: rgb(21 128 61);
}
</style>