<template>
  <div class="font-gotham">

    <!-- ===== MOBILE BANNER (< md) ===== -->
    <div class="relative md:hidden">
      <div class="relative w-full">
        <!-- Images: v-show per slide, natural size -->
        <img
          v-for="(banner, index) in banners"
          :key="index"
          v-show="currentIndex === index"
          :src="banner.mobileImage"
          :alt="banner.title"
          class="w-full h-auto block"
        />

        <!-- Text overlay: bottom 50% dengan gradient -->
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex items-end z-10">
          <div class="px-5 pb-10 w-full">
            <h1 class="text-white text-lg font-semibold mb-1 leading-tight">
              {{ currentBanner.title }}
            </h1>
            <p class="text-white/85 text-xs leading-relaxed line-clamp-2" v-html="currentBanner.description"></p>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
        <button
          v-for="(banner, index) in banners"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'bg-red-600 scale-125' : 'bg-white/60 hover:bg-white'"
        ></button>
      </div>

      <!-- Arrow Kiri -->
      <button
        @click="previousSlide"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 rounded-full p-2 z-50 backdrop-blur-sm transition-all duration-300"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Arrow Kanan -->
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 rounded-full p-2 z-50 backdrop-blur-sm transition-all duration-300"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- ===== DESKTOP BANNER (≥ md) ===== -->
    <div class="relative hidden md:block overflow-hidden">
      <div
        class="relative w-full md:h-[540px] lg:h-[680px] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        :style="{ backgroundImage: `url('${currentImage}')` }"
      >
        <!-- Dark Overlay -->
        <div class="absolute inset-0"></div>

        <!-- Content Container -->
        <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div class="w-full lg:w-1/2">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 lg:mb-8 leading-tight transition-opacity duration-500"
                :class="currentBanner.textColor"
                :key="currentIndex">
              {{ currentBanner.title }}
            </h1>
            <p class="text-sm md:text-base lg:text-lg text-justify leading-relaxed max-w-2xl transition-opacity duration-500"
              :class="currentBanner.textColor"
              :key="`desc-${currentIndex}`"
              v-html="currentBanner.description">
            </p>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
        <button
          v-for="(banner, index) in banners"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'bg-red-600 scale-125' : 'bg-gray-200 hover:bg-gray-300'"
        ></button>
      </div>

      <!-- Arrow Kiri -->
      <button
        @click="previousSlide"
        :class="arrowButtonClass"
        class="absolute left-6 top-1/2 transform -translate-y-1/2 rounded-full p-3 transition-all duration-300 z-50 backdrop-blur-sm"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M6 12H18M6 12L11 7M6 12L11 17" :stroke="arrowStrokeColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Arrow Kanan -->
      <button
        @click="nextSlide"
        :class="arrowButtonClass"
        class="absolute right-6 top-1/2 transform -translate-y-1/2 rounded-full p-3 transition-all duration-300 z-50 backdrop-blur-sm"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M6 12H18M18 12L13 7M18 12L13 17" :stroke="arrowStrokeColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
    mobileImage: '/product-mobile-1.jpeg',
    title: 'Products',
    description: 'Architects, contractors, and designers can find a complete range of door, glass, and window hardware for residential and commercial projects within the <span class="font-semibold">Glatino Premium</span> product collection.',
    textColor: 'text-gray-900'
  },
  {
    image: '/product-2.png',
    mobileImage: '/product-mobile-2.jpeg',
    title: 'Engineered for Mobility',
    description: 'Precision-built caster wheels delivering superior load capacity, long-lasting durability, and consistent rolling performance.',
    textColor: 'text-gray-900'
  },
  {
    image: '/product-3.png',
    mobileImage: '/product-mobile-3.jpeg',
    title: 'Seamless Closing. Lasting Control.',
    description: 'High-performance door closers engineered for smooth, quiet operation and long-term durability, delivering precise motion control, enhanced safety, and a refined architectural finish for modern residential and commercial spaces.',
    textColor: 'text-white'
  },
  {
    image: '/product-4.png',
    mobileImage: '/product-mobile-4.jpeg',
    title: 'Architectural Hinge Collection',
    description: 'Expertly engineered hinges that combine structural integrity with sophisticated finishing details.',
    textColor: 'text-gray-900'
  },
  {
    image: '/product-5.png',
    mobileImage: '/product-mobile-5.jpeg',
    title: 'Glass Hardware Collection',
    description: 'Premium accessories for bathroom and office glass installations, designed for durability, precision, and refined aesthetics.',
    textColor: 'text-gray-900'
  }
])

// Responsive screen detection
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)
const isMobile = computed(() => windowWidth.value < 768)
const handleResize = () => { windowWidth.value = window.innerWidth }

// Current slide state
const currentIndex = ref(0)
const currentBanner = computed(() => banners.value[currentIndex.value])
const currentImage = computed(() =>
  isMobile.value ? currentBanner.value.mobileImage : currentBanner.value.image
)

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
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', handleResize)
  startAutoSlide()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  stopAutoSlide()
})
</script>

<style scoped>
.font-gotham {
  font-family: 'Gotham', sans-serif;
}
</style>