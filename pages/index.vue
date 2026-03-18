<template>
  <div class="font-gotham">
    <!-- Hero Swiper Section Command-->

    <!-- ===== MOBILE BANNER (< md) ===== -->
    <div
      class="relative w-full md:hidden"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="relative w-full overflow-hidden">
        <img
          v-for="(banner, index) in mobileBanners"
          :key="index"
          v-show="currentSlide === index"
          :src="banner.image"
          :alt="`Glatino Premium Slide ${index + 1}`"
          class="w-full h-auto block"
        />

        <!-- Text overlay bottom 50% with gradient (only shown if title or description exists) -->
        <div
          v-if="mobileBanners[currentSlide]?.title || mobileBanners[currentSlide]?.description"
          class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex items-end z-10"
        >
          <div class="px-5 pb-10 w-full">
            <h1 v-if="mobileBanners[currentSlide]?.title" class="text-white text-lg font-semibold mb-1 leading-tight">
              {{ mobileBanners[currentSlide]?.title }}
            </h1>
            <p v-if="mobileBanners[currentSlide]?.description" class="text-white/85 text-xs leading-relaxed line-clamp-2">
              {{ mobileBanners[currentSlide]?.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Dots Indicator -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        <button
          v-for="(slide, index) in totalSlides"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300',
            currentSlide === index ? 'bg-red-500 scale-110' : 'bg-gray-500 bg-opacity-50'
          ]"
        />
      </div>

      <!-- Progress bar -->
      <div class="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div
          class="h-full bg-red-500 transition-all duration-100 ease-linear"
          :style="{ width: `${progressWidth}%` }"
        />
      </div>
    </div>

    <!-- ===== DESKTOP BANNER (≥ md) ===== -->
    <div
      class="relative hidden md:block w-full h-screen overflow-hidden"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- Swiper Container -->
      <div
        class="flex h-full transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(img, index) in desktopSlideImages"
          :key="index"
          class="min-w-full shrink-0 h-full relative"
        >
          <img
            :src="img"
            :alt="`Glatino Premium Slide ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Dots Indicator -->
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

      <!-- Progress bar -->
      <div class="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div
          class="h-full bg-red-500 transition-all duration-100 ease-linear"
          :style="{ width: `${progressWidth}%` }"
        />
      </div>
    </div>

    <!-- Our Products Section - Overlapping Command-->
    <div class="relative mt-16 lg:-mt-24 z-30">
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
              <p class="text-black text-lg leading-relaxed mb-8 md:pr-16 text-justify">
                Discover the full range of <span class="font-semibold">Glatino Premium</span> products, from glass accessories to mechanical lock solutions for aluminum and wooden doors. We also offer <span class="font-semibold">smart locks</span> designed to meet advanced, high-technology security needs.
              </p>              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- CATEGORIES SECTION - FROM DATABASE -->
    <!-- ============================================ -->
    <div class="container mx-auto py-16">
      <!-- Loading State -->
      <div v-if="loadingCategories" class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div 
          v-for="i in 4" 
          :key="i" 
          class="bg-gray-200 rounded-3xl animate-pulse h-96"
        >
          <div class="h-64 bg-gray-300 rounded-t-3xl"></div>
          <div class="p-6 space-y-3">
            <div class="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>

      <!-- Categories Grid - LAYOUT PERSIS SEPERTI KODE PERTAMA -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-center items-center">
        <div 
          v-for="category in categories" 
          :key="category.id"
          class="group flex flex-col bg-gray-100 rounded-3xl 
                  border-2 border-transparent
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:border-red-500"
        >
          <!-- Image dengan caching -->
          <div class="h-[400px] sm:h-[320px] md:h-[400px] rounded-3xl overflow-hidden">
            <CachedImg
              :src="category.image_url || '/placeholder.png'"
              :alt="category.category_name"
              class="w-full h-full object-cover rounded-3xl"
            />
          </div>
          
          <!-- Category Info -->
          <div class="py-6">
            <p class="text-center font-semibold text-2xl">{{ category.category_name.toUpperCase() }}</p>
            <p class="text-center text-sm">View all {{ category.category_name }} Product</p>
          </div>
          
          <!-- Button -->
          <div class="flex justify-center items-center py-4 mb-8">
            <nuxt-link 
              :to="`/product?category=${category.id}`"
              class="bg-red-500 text-white px-12 py-2 rounded-full 
                    text-xs transition-colors duration-300
                    group-hover:bg-red-600"
            >
              Product List
            </nuxt-link>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loadingCategories && categories.length === 0" class="text-center py-16">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <p class="text-gray-500 text-lg">No categories available</p>
        <p class="text-gray-400 text-sm mt-2">Please check back later</p>
      </div>
    </div>

    <!-- Section e-catalog Command -->    
    <section class="relative w-full min-h-[400px] sm:min-h-[600px] lg:h-[1063px] bg-[#4A1314] mt-12 sm:mt-16 lg:mt-24 overflow-hidden flex items-center justify-center py-16 lg:py-0">

      <!-- Image layer -->
      <div 
        class="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style="background-image: url('/e-catalog-background.png')"
      ></div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6">
        <h1 class="text-white text-xl sm:text-3xl md:text-5xl uppercase leading-tight mb-8 sm:mb-12 lg:mb-16 font-gotham">
          Where Premium Remarkable Quality        
        </h1>
        <h1 class="text-white text-xl sm:text-3xl md:text-5xl -mt-8 uppercase leading-tight mb-8 sm:mb-12 lg:mb-16 font-gotham">         
          meets modern lifestyle
        </h1>

        <NuxtLink
          to="/e-catalog"
          class="inline-block bg-red-600 text-white text-base sm:text-xl lg:text-2xl px-12 sm:px-20 lg:px-32 py-3 sm:py-4 lg:py-6 rounded-full font-medium
                hover:bg-red-700 transition duration-300"
        >
          E-Catalog
        </NuxtLink>
      </div>
    </section>
    
    <!-- Reviews Section Command-->
    <div class="container mx-auto py-12 sm:py-20 lg:py-32 px-6">
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
      <div
        class="relative overflow-visible"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div
          ref="carouselTrack"
          class="flex gap-6"
          :class="{ 'transition-transform duration-500 ease-in-out': isTransitioning }"
          :style="carouselStyle"
        >
          <!-- Review Card -->
          <div
            v-for="(review, index) in infiniteReviews"
            :key="`review-${index}`"
            @click="handleCardClick(index)"
            :class="[
              'min-w-[90%] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] bg-white rounded-2xl p-8 border border-gray-200',
              'transition-all duration-300',
              isActiveCard(index)
                ? 'opacity-100 blur-0 scale-100 shadow-2xl -translate-y-2'
                : isCardVisible(index)
                  ? 'opacity-100 blur-0 scale-100 hover:shadow-2xl hover:-translate-y-2 cursor-pointer'
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import axios from 'axios'
import FooterComponent from '~/components/footer.vue'

// ============================================
// TYPESCRIPT INTERFACES
// ============================================
interface Category {
  id: number
  category_name: string
  image_url: string | null
}

interface Review {
  name: string
  text: string
}

// ============================================
// SHARED: WINDOW WIDTH (used by hero + reviews)
// ============================================
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)
const handleResize = () => { windowWidth.value = window.innerWidth }

// ============================================
// HERO SLIDER
// ============================================
const desktopSlideImages = [
  '/gambar-index-1.png',
  '/gambar-index-2.png',
  '/gambar-index-3.png',
]

const mobileBanners = [
  {
    image: '/index-banner-mobile-1.jpeg',
    title: '',
    description: ''
  },
  {
    image: '/index-banner-mobile-2.jpeg',
    title: 'Premium Glass Hardware Solutions',
    description: 'Engineered for modern residential and commercial space'
  },
  {
    image: '/index-banner-mobile-3.jpeg',
    title: 'The New Statement of Modern Design',
    description: "The Gun Metal Series is the perfect choice to complement your modern door design. It's time to upgrade your home's look to be more masculine, minimalist, and luxurious!"
  }
]

const currentSlide = ref(0)
const totalSlides = ref(3)
const progressWidth = ref(0)
const autoPlayInterval = ref<ReturnType<typeof setInterval> | null>(null)
const progressInterval = ref<ReturnType<typeof setInterval> | null>(null)

const autoPlayDuration = 5000
const progressUpdateInterval = 100

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
  autoPlayInterval.value = setInterval(() => {
    nextSlide()
  }, autoPlayDuration)
  
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

const handleMouseEnter = () => {
  stopAutoPlay()
}

const handleMouseLeave = () => {
  resetProgress()
  startAutoPlay()
}

// ============================================
// CACHE HELPERS
// ============================================
const CACHE_TTL = 10 * 60 * 1000

const getCache = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key)
    if (!item) return null
    const { data, timestamp } = JSON.parse(item)
    if (Date.now() - timestamp > CACHE_TTL) return null
    return data as T
  } catch { return null }
}

const setCache = (key: string, data: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }))
  } catch {}
}

// ============================================
// CATEGORIES API
// ============================================

interface CategoryCached {
  id: number
  category_name: string
  image_url: string | null
}

const categories = ref<CategoryCached[]>([])
const loadingCategories = ref(true)

const fetchCategories = async () => {
  // Tampilkan dari cache instan jika ada
  const cached = getCache<CategoryCached[]>('index_categories')
  if (cached) {
    categories.value = cached
    loadingCategories.value = false
  }

  try {
    const response = await axios.get('https://backend-brand-website.vercel.app/api/api/categories/')
    let data = response.data

    if (data && Array.isArray(data.data)) data = data.data
    else if (data && Array.isArray(data.results)) data = data.results
    else if (!Array.isArray(data)) { console.log('Unexpected response shape:', data); data = [] }

    const ORDER = [1, 4, 9, 12]

    const localImages: Record<number, string> = {
      1: '/handle-roses.png',
      4: '/pull-handle.png',
      9: '/hinge.png',
      12: '/aluminium-lock.png',
    }

    // Filter berdasarkan ID spesifik & urutkan sesuai ORDER
    const filtered = ORDER
      .map(id => (data as Category[]).find(c => c.id === id))
      .filter(Boolean) as Category[]

    // Override image dengan local image
    const result = filtered.map(c => ({
      ...c,
      image_url: localImages[c.id] ?? c.image_url
    }))

    categories.value = result
    setCache('index_categories', result)
    console.log('✅ Categories loaded:', categories.value)

  } catch (error: any) {
    console.error('❌ Error fetching categories:', error)
  } finally {
    loadingCategories.value = false
  }
}


// ============================================
// REVIEWS CAROUSEL
// ============================================
const reviews = ref<Review[]>([
  {
    name: "Z*****A",
    text: "Pesen warna coklat tapi kebetulan barang kosong jadi rekomendasi warna lain yang tersedia bagus dan elegant super simple 👍🏻 best di toko resmi no kw produknya"
  },
  {
    name: "D*****A",
    text: "Seller fast respon dan pengiriman cepat. untuk bahannya sesuai dengan harga baud nya kalyak sehinga lebih enak kuat. Semoga awet, tidak cepat rusak. Next order lagi."
  },
  {
    name: "Nuryanto.",
    text: "Kualitas nya bagus kokoh, mmg perlu yang bAgus krn pengalaman beli yang murah kurang puas Pengiriman so so lah krn dr surabaya ke jkt"
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

const currentReviewIndex = ref(3)
const isTransitioning = ref(true)
const carouselTrack = ref<HTMLElement | null>(null)

const infiniteReviews = computed(() => {
  const items = reviews.value
  return [
    ...items.slice(-3),
    ...items,
    ...items.slice(0, 3)
  ]
})

const visibleCards = computed(() => {
  if (windowWidth.value >= 1024) return 3
  if (windowWidth.value >= 640) return 2
  return 1
})

const stepPercent = computed(() => {
  if (windowWidth.value >= 1024) return 33.333
  if (windowWidth.value >= 640) return 50
  return 90
})

const carouselStyle = computed(() => ({
  transform: `translateX(calc(-${currentReviewIndex.value * stepPercent.value}% - ${currentReviewIndex.value * 1.5}rem))`
}))

const isCardVisible = (index: number) => {
  return index >= currentReviewIndex.value && index < currentReviewIndex.value + visibleCards.value
}

// Hanya card paling tengah dari visible range yang auto-elevated
const isActiveCard = (index: number) => {
  const centerOffset = Math.floor(visibleCards.value / 2)
  return index === currentReviewIndex.value + centerOffset
}

// Klik card → navigate jika bukan card tengah
const handleCardClick = (index: number) => {
  const centerOffset = Math.floor(visibleCards.value / 2)
  const center = currentReviewIndex.value + centerOffset
  if (index < center) previousReview()
  else if (index > center) nextReview()
}

// Swipe touch untuk mobile
const touchStartX = ref(0)
const handleTouchStart = (e: TouchEvent) => {
  if (e.touches[0]) touchStartX.value = e.touches[0].clientX
}
const handleTouchEnd = (e: TouchEvent) => {
  const endX = e.changedTouches[0]?.clientX
  if (endX === undefined) return
  const diff = touchStartX.value - endX
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextReview()
    else previousReview()
  }
}

const nextReview = () => {
  isTransitioning.value = true
  currentReviewIndex.value++
  
  if (currentReviewIndex.value === reviews.value.length + 3) {
    setTimeout(() => {
      isTransitioning.value = false
      currentReviewIndex.value = 3
    }, 500)
  }
}

const previousReview = () => {
  isTransitioning.value = true
  currentReviewIndex.value--
  
  if (currentReviewIndex.value === 2) {
    setTimeout(() => {
      isTransitioning.value = false
      currentReviewIndex.value = reviews.value.length + 2
    }, 500)
  }
}

// ============================================
// LIFECYCLE HOOKS
// ============================================
onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', handleResize)
  startAutoPlay()
  fetchCategories()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  stopAutoPlay()
})
</script>

<style scoped>
img {
  object-position: center;
  transition: transform 0.3s ease;
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

button:hover {
  transform: scale(1.1);
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.font-gotham {
  font-family: 'Gotham', sans-serif;
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.filter.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>