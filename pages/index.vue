<template>
  <div class="font-gotham">
    <!-- Hero Swiper Section Command-->
    <div 
      class="relative w-full h-screen overflow-hidden"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- Swiper Container -->
      <div 
        class="flex transition-transform duration-500 ease-in-out h-full"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <!-- Slide 1 Command-->
        <div class="min-w-full h-full relative">
          <img 
            src="/gambar-index-1.png" 
            alt="Glatino Premium Slide 1"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Slide 2 Command-->
        <div class="min-w-full h-full relative">
          <img 
            src="/gambar-index-2.png" 
            alt="Glatino Premium Slide 2"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Slide 3 Command-->
        <div class="min-w-full h-full relative">
          <img 
            src="/gambar-index-3.png" 
            alt="Glatino Premium Slide 3"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Dots Indicator Command-->
      <div class="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        <button
          v-for="(slide, index) in totalSlides"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300 hover:scale-110',
            currentSlide === index 
              ? 'bg-red-500 scale-110' 
              : 'bg-gray-500 bg-opacity-50 hover:bg-opacity-75'
          ]"
        />
      </div>

      <!-- Auto-play progress indicator Command-->
      <div class="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          class="h-full bg-red-500 transition-all duration-100 ease-linear"
          :style="{ width: `${progressWidth}%` }"
        />
      </div>
    </div>

    <!-- Our Products Section - Overlapping Command-->
    <div class="relative -mt-24 z-30">
      <div class="container mx-auto">
        <div class="bg-white rounded-3xl shadow-2xl">
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            <!-- Left Side - Product Image Command-->
            <div class="lg:w-1/2 flex justify-center lg:justify-start">
              <div class="relative w-full bg-gray-100 
                          rounded-t-3xl rounded-b-3xl lg:rounded-tr-none lg:rounded-br-none 
                          overflow-hidden">
                <img 
                  src="/product-locks.png" 
                  alt="Glatino Premium Smart Locks" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Right Side - Content Command-->
            <div class="lg:w-1/2 text-center lg:text-left px-6 py-12 font-gotham">
              
              <!-- Title Command-->
              <h2 class="text-4xl lg:text-5xl text-black text-center mb-6">
                OUR PRODUCTS
              </h2>
              
              <!-- Description Command-->
              <p class="text-black text-lg leading-relaxed mb-8 pr-16 text-justify">
                Discover the full range of <span class="font-semibold">Glatino Premium</span> products, from glass accessories to mechanical lock solutions for aluminum and wooden doors. We also offer <span class="font-semibold">smart locks</span> designed to meet advanced, high-technology security needs.
              </p>              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional spacing for next sections Command-->
    <div class="container mx-auto py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center">
        <!-- Placeholder for additional content Command-->
        <div class="group flex flex-col bg-gray-100 rounded-3xl 
                    border-2 border-transparent
                    transition-all duration-300 ease-out
                    hover:scale-105 hover:border-red-500">
          <img src="/handle-roses.png" alt="">
          <div class="pt-2">
            <p class="text-center font-semibold text-2xl">HANDLE ROSES</p>
            <p class="text-center text-sm">View all Handle Roses Product</p>
          </div>
          <div class="flex justify-center items-center py-8">
            <button class="bg-red-500 text-white px-12 py-2 rounded-full 
                          text-xs transition-colors duration-300
                          group-hover:bg-red-600">
              Product List
            </button>
          </div>
        </div>                
        <!-- Placeholder for additional content Command-->
        <div class="group flex flex-col bg-gray-100 rounded-3xl 
                    border-2 border-transparent
                    transition-all duration-300 ease-out
                    hover:scale-105 hover:border-red-500">
          <img src="/hinge.png" alt="">
          <div class="py-2">
            <p class="text-center font-semibold text-2xl">HINGES</p>
            <p class="text-center text-sm">View all Hinges Product</p>
          </div>
          <div class="flex justify-center items-center py-8">
            <button class="bg-red-500 text-white px-12 py-2 rounded-full 
                          text-xs transition-colors duration-300
                          group-hover:bg-red-600">
              Product List
            </button>
          </div>
        </div>                
        <!-- Placeholder for additional content Command-->
        <div class="group flex flex-col bg-gray-100 rounded-3xl 
                    border-2 border-transparent
                    transition-all duration-300 ease-out
                    hover:scale-105 hover:border-red-500">
          <img src="/pull-handle.png" alt="">
          <div class="py-2">
            <p class="text-center font-semibold text-2xl">PULL HANDLES</p>
            <p class="text-center text-sm">View all Pull Handles Product</p>
          </div>
          <div class="flex justify-center items-center py-8">
            <button class="bg-red-500 text-white px-12 py-2 rounded-full 
                          text-xs transition-colors duration-300
                          group-hover:bg-red-600">
              Product List
            </button>
          </div>
        </div>                
        <!-- Placeholder for additional content Command-->
        <div class="group flex flex-col bg-gray-100 rounded-3xl 
                    border-2 border-transparent
                    transition-all duration-300 ease-out
                    hover:scale-105 hover:border-red-500">
          <img src="/aluminium-lock.png" alt="">
          <div class="py-2">
            <p class="text-center font-semibold text-2xl">ALUMINIUM LOCKS</p>
            <p class="text-center text-sm">View all Aluminium Locks Product</p>
          </div>
          <div class="flex justify-center items-center py-8">
            <button class="bg-red-500 text-white px-12 py-2 rounded-full 
                          text-xs transition-colors duration-300
                          group-hover:bg-red-600">
              Product List
            </button>
          </div>
        </div>                
      </div>
    </div>

    <!-- Section e-catalog Command -->    
    <section class="relative w-full h-[1063px] bg-[#4A1314] overflow-hidden flex items-center justify-center">

      <!-- Image layer -->
      <div 
        class="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style="background-image: url('/e-catalog-background.png')"
      ></div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6">
        <h1 class="text-white text-3xl md:text-5xl uppercase leading-tight mb-16 font-gotham">
          Where Premium Remarkable Quality <br /> <br>
          meets modern lifestyle
        </h1>

        <button
          class="bg-red-600 text-white text-2xl px-32 py-6 rounded-full font-medium
                hover:bg-red-700 transition duration-300"
        >
          E-Catalog
        </button>
      </div>
    </section>
    
    <!-- Reviews Section Command-->
    <div class="container mx-auto py-16 px-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-4xl lg:text-5xl font-semibold text-black">
          What People Say
        </h2>
        
        <!-- Navigation Arrows Command-->
        <div class="flex gap-4">
          <button
            @click="previousReview"
            class="w-10 h-10 flex items-center justify-center rounded-full 
                  border-gray-300 hover:border-red-500 
                  transition-colors duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="nextReview"
            class="w-10 h-10 flex items-center justify-center rounded-full 
                  border-gray-300 hover:border-red-500 
                  transition-colors duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Reviews Carousel with Infinite Loop Command-->
      <div class="relative overflow-visible">
        <div 
          ref="carouselTrack"
          class="flex gap-6"
          :class="{ 'transition-transform duration-500 ease-in-out': isTransitioning }"
          :style="{ transform: `translateX(calc(-${currentReviewIndex * 33.333}% - ${currentReviewIndex * 1.5}rem))` }"
        >
          <!-- Review Card -->
          <div
            v-for="(review, index) in infiniteReviews"
            :key="`review-${index}`"
            :class="[
              'min-w-[calc(33.333%-1rem)] bg-white rounded-2xl p-8 border border-gray-200',
              'transition-all duration-300',
              // Blur effect - show 3 cards clearly, blur the rest Command
              isCardVisible(index)
                ? 'opacity-100 blur-0 scale-100 hover:shadow-2xl hover:-translate-y-2'
                : 'opacity-40 blur-[2px] scale-95'
            ]"
          >
            <!-- Stars Command-->
            <div class="flex gap-1 mb-4">
              <svg v-for="star in 5" :key="star" class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>

            <!-- Name with Verification Command -->
            <div class="flex items-center gap-2 mb-4">
              <span class="font-semibold text-lg text-black">{{ review.name }}</span>
              <svg class="w-5 h-5 text-green-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5.707 7.707l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l5.293-5.293a1 1 0 011.414 1.414z"/>
              </svg>
            </div>

            <!-- Review Text Command -->
            <p class="text-gray-700 text-sm leading-relaxed text-justify">
              {{ review.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FooterComponent from '~/components/footer.vue'

// Reactive variables
const currentSlide = ref(0)
const totalSlides = ref(3)
const progressWidth = ref(0)
const autoPlayInterval = ref<number | null>(null)
const progressInterval = ref<number | null>(null)

// Auto-play configuration
const autoPlayDuration = 5000 // 5 seconds per slide
const progressUpdateInterval = 100 // Update progress every 100ms

// Functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
  resetProgress()
}

const goToSlide = (index: number) => {
  currentSlide.value = index
  resetProgress()
}

const resetProgress = () => {
  progressWidth.value = 0
}

const updateProgress = () => {
  const increment = (progressUpdateInterval / autoPlayDuration) * 100
  progressWidth.value += increment
  
  if (progressWidth.value >= 100) {
    progressWidth.value = 100
  }
}

const startAutoPlay = () => {
  // Start auto-play
  autoPlayInterval.value = setInterval(() => {
    nextSlide()
  }, autoPlayDuration)
  
  // Start progress indicator
  progressInterval.value = setInterval(() => {
    updateProgress()
  }, progressUpdateInterval)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
  if (progressInterval.value) {
    clearInterval(progressInterval.value)
    progressInterval.value = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})

// Pause auto-play on hover
const handleMouseEnter = () => {
  stopAutoPlay()
}

const handleMouseLeave = () => {
  resetProgress()
  startAutoPlay()
}

// Review data
const reviews = ref([
  {
    name: "Z*****A",
    text: "Pesen warna coklat tapi kebetulan barang kosong jadi rekomendasi warna lain yang tersedia bagus dan elegant super simple & best di toko resmi no kw produknya"
  },
  {
    name: "D*****D",
    text: "Seller fast respon dan pengiriman cepat. untuk bahannya sesuai dengan harga baud nya kalyak sehinga lebih enak kuat. Semoga awet. baek cepat rusak Next order lagi."
  },
  {
    name: "Nuryanto.",
    text: "Kualitas nya bagus kokoh, mmpg perlu yang bAGus pengalaman beli sebelumnya kureng puas Pengiriman so so lah krn dr Jakarta ke jkt"
  },
  {
    name: "M***H",
    text: "Fast respon, pengiriman cepat, kualitas produk bagus sesuai deskripsi. Terima kasih!"
  },
  {
    name: "S***R",
    text: "Barang berkualitas premium, pengiriman cepat dan aman. Sangat puas dengan pelayanannya."
  },
  {
    name: "A***K",
    text: "Produk original, packaging rapi, harga worth it. Recommended seller!"
  }
])

// Infinite carousel setup
const currentReviewIndex = ref(3) // Start from cloned items
const isTransitioning = ref(true)
const carouselTrack = ref<HTMLElement | null>(null)

// Create infinite loop by duplicating items at start and end
const infiniteReviews = computed(() => {
  const items = reviews.value
  // Clone last 3 items to start, and first 3 items to end
  return [
    ...items.slice(-3),  // Last 3 items
    ...items,            // Original items
    ...items.slice(0, 3) // First 3 items
  ]
})

// Check if card should be visible (not blurred)
const isCardVisible = (index: number) => {
  return index >= currentReviewIndex.value && index < currentReviewIndex.value + 3
}

// Next review
const nextReview = () => {
  isTransitioning.value = true
  currentReviewIndex.value++
  
  // Check if we've reached the cloned section at the end
  if (currentReviewIndex.value === reviews.value.length + 3) {
    setTimeout(() => {
      isTransitioning.value = false
      currentReviewIndex.value = 3 // Reset to real first item
    }, 500) // Match transition duration
  }
}

// Previous review
const previousReview = () => {
  isTransitioning.value = true
  currentReviewIndex.value--
  
  // Check if we've reached the cloned section at the start
  if (currentReviewIndex.value === 2) {
    setTimeout(() => {
      isTransitioning.value = false
      currentReviewIndex.value = reviews.value.length + 2 // Reset to real last item
    }, 500) // Match transition duration
  }
}
</script>

<style scoped>
/* Smooth transitions for better UX */
img {
  object-position: center;
  transition: transform 0.3s ease;
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Hover effects for dots */
button:hover {
  transform: scale(1.1);
}

/* Prevent text selection */
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.font-gotham {
  font-family: 'Gotham', sans-serif;
}

/* Additional hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Custom drop shadow for products */
.filter.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}
</style>