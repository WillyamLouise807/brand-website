<template>
  <div class="font-gotham">
    <!-- Banner Carousel Container -->
    <div class="relative overflow-hidden">
      <!-- Background Image Section with Transition -->
      <div 
        class="relative w-full h-[680px] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        :style="{ backgroundImage: `url('${currentBanner.image}')` }"
      >
        <!-- Dark Overlay -->
        <div class="absolute inset-0"></div>
        
        <!-- Content Container -->
        <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div class="w-full lg:w-1/2">
            <!-- Main Title with Conditional Text Color -->
            <h1 class="text-2xl lg:text-4xl font-semibold mb-8 leading-tight transition-opacity duration-500" 
                :class="currentBanner.textColor"
                :key="currentIndex">
              {{ currentBanner.title }}
            </h1>
            
            <!-- Description with Conditional Text Color -->
            <p class="text-sm lg:text-lg text-justify leading-relaxed max-w-2xl transition-opacity duration-500" 
              :class="currentBanner.textColor"
              :key="`desc-${currentIndex}`"
              v-html="currentBanner.description">
            </p>
          </div>
        </div>
      </div>
      
      <!-- Navigation Elements -->
      <!-- Navigation Dots -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
        <button
          v-for="(banner, index) in banners"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'bg-red-600 scale-125' : 'bg-gray-200 hover:bg-gray-300'"
        ></button>
      </div>
      
      <!-- Navigation Arrows -->
      <!-- Arrow Kiri -->
      <button 
        @click="previousSlide"
        :class="arrowButtonClass"
        class="absolute left-6 top-1/2 transform -translate-y-1/2 rounded-full p-3 transition-all duration-300 z-50 backdrop-blur-sm"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M6 12H18M6 12L11 7M6 12L11 17" :stroke="arrowStrokeColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      </button>
      
      <!-- Arrow Kanan -->
      <button 
        @click="nextSlide"
        :class="arrowButtonClass"
        class="absolute right-6 top-1/2 transform -translate-y-1/2 rounded-full p-3 transition-all duration-300 z-50 backdrop-blur-sm"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M6 12H18M18 12L13 7M18 12L13 17" :stroke="arrowStrokeColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Banner data dengan textColor property
const banners = ref([
  {
    image: '/product.png',
    title: 'Products',
    description: 'Architects, contractors, and designers can find a complete range of door, glass, and window hardware for residential and commercial projects within the <span class="font-semibold">Glatino Premium</span> product collection.',
    textColor: 'text-gray-900'
  },
  {
    image: '/product-2.png',
    title: 'Engineered for Mobility',
    description: 'Precision-built caster wheels delivering superior load capacity, long-lasting durability, and consistent rolling performance.',
    textColor: 'text-gray-900'
  },
  {
    image: '/product-3.png',
    title: 'Seamless Closing. Lasting Control.',
    description: 'High-performance door closers engineered for smooth, quiet operation and long-term durability, delivering precise motion control, enhanced safety, and a refined architectural finish for modern residential and commercial spaces.',
    textColor: 'text-white'
  },
  {
    image: '/product-4.png',
    title: 'Architectural Hinge Collection',
    description: 'Expertly engineered hinges that combine structural integrity with sophisticated finishing details.',
    textColor: 'text-gray-900'
  },
  {
    image: '/product-5.png',
    title: 'Glass Hardware Collection',
    description: 'Premium accessories for bathroom and office glass installations, designed for durability, precision, and refined aesthetics.',
    textColor: 'text-gray-900'
  }
])

// Current slide state
const currentIndex = ref(0)
const currentBanner = computed(() => banners.value[currentIndex.value])

// Computed properties untuk styling arrow
const arrowStrokeColor = computed(() => {
  return currentBanner.value.image === '/product-3.png' ? '#ffffff' : '#ffffff'
})

const arrowButtonClass = computed(() => {
  if (currentBanner.value.image === '/product-3.png') {
    return 'bg-white/20 hover:bg-white/30'
  } else {
    return 'bg-black/20 hover:bg-black/30'
  }
})

// Auto-slide interval
let autoSlideInterval = null

// Navigation functions
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.value.length
}

const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? banners.value.length - 1 : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
}

// Auto-slide functionality
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
.font-gotham {
  font-family: 'Gotham', sans-serif;
}
</style>