<template>
  <div class="font-gotham">
    <!-- Loading State -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-gray-500">Loading product...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <svg class="w-24 h-24 text-red-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-red-500 text-xl mb-2">{{ error }}</p>
        <nuxt-link to="/product" class="mt-4 inline-block bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
          Back to Products
        </nuxt-link>
      </div>
    </div>

    <!-- Product Detail -->
    <template v-else-if="product">
      <!-- Background Image Section -->
      <div class="relative w-full h-[340px] bg-[#ED1D25] overflow-hidden">
        <!-- Image layer -->
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('/detail-catalog.png')"
        ></div>

        <!-- Content -->
        <div class="relative z-10 h-full flex items-center justify-center">
          <h1 class="text-3xl lg:text-4xl uppercase font-semibold text-white text-center">
            {{ product.category?.category_name || 'Product' }}
          </h1>
        </div>
      </div>

      <div class="container mx-auto py-16">
        <p class="text-5xl font-semibold">Product</p>

        <!-- Breadcrumb -->
        <div class="py-8">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2">
              <li class="inline-flex items-center">
                <nuxt-link to="/" class="text-sm text-black hover:text-gray-900">HOME</nuxt-link>
              </li>
              <li>
                <div class="flex items-center">                  
                  <svg viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                    <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <nuxt-link to="/product" class="ml-2 text-sm text-black hover:text-gray-900">PRODUCT</nuxt-link>
                </div>
              </li>
              <li>
                <div class="flex items-center">                  
                  <svg viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                    <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <nuxt-link 
                    :to="`/product?category=${product.category_id}`"
                    class="ml-2 text-sm text-black uppercase hover:text-gray-900"
                  >
                    {{ product.category?.category_name || 'Category' }}
                  </nuxt-link>
                </div>
              </li>
              <li>
                <div class="flex items-center">                  
                  <svg viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                    <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span class="ml-2 text-sm text-red-600 uppercase font-semibold">{{ product.product_name }}</span>
                </div>
              </li>
            </ol>
          </nav>        
        </div>

        <!-- Product Detail Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-[8%_38%_24%_30%] gap-2 my-20">

          <!-- ================= THUMBNAIL ================= -->
          <div class="flex items-center justify-center">
            <div class="p-4 h-[320px] overflow-y-auto custom-scroll">
              <div
                v-for="(img, index) in productImages"
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
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>

          <!-- ================= PREVIEW ================= -->
          <div class="flex items-center justify-center bg-white">
            <div class="w-[400px] h-[500px] flex items-center justify-center overflow-hidden">
              <img
                :src="selectedImage"
                class="max-w-full max-h-full object-contain transition duration-300"
                @click="openZoom(selectedImage)"
                @error="handleImageError"
              />
            </div>
          </div>

          <!-- ================= SECTION INFO PRODUK (LEFT) ================= -->
          <div class="py-10 flex flex-col justify-between h-full">
            <!-- PRODUCT NAME -->
            <div>
              <h3 class="text-2xl font-bold tracking-widest">PRODUCT NAME</h3>
              <p class="mt-3 text-xl tracking-wide">{{ product.product_name }}</p>
            </div>

            <!-- COLOR + TYPE -->
            <div class="flex gap-16">
              <div>
                <h3 class="text-2xl font-bold tracking-widest">COLOR</h3>
                <p class="mt-3 text-xl tracking-wide">{{ product.color || '-' }}</p>
              </div>              
            </div>

            <!-- MATERIAL -->
            <div>
              <h3 class="text-2xl font-bold tracking-widest">MATERIAL</h3>
              <p class="mt-3 text-xl tracking-wide">{{ product.materials?.map(m => m.material_name).join(', ') || '-' }}</p>
            </div>

            <!-- DESCRIPTION -->
            <div class="">
              <h3 class="text-2xl font-bold tracking-widest">DESCRIPTION</h3>
              <p class="mt-3 text-sm tracking-wide whitespace-pre-line">{{ product.description || '-' }}</p>
            </div>
          </div>

          <!-- ================= SECTION INFO (RIGHT) ================= -->
          <div class="pt-10 flex flex-col h-full">
            <!-- PRODUCT CODE -->
            <div>
              <h3 class="text-2xl font-bold uppercase tracking-[2px]">PRODUCT CODE</h3>
              <p class="mt-3 text-xl tracking-wide">{{ product.product_code }}</p>
            </div>

            <!-- <div v-if="productType !== null" class="mt-[100px]">
              <h3 class="text-2xl font-bold tracking-widest">TYPE</h3>
              <p class="mt-3 text-xl tracking-wide">{{ productType }}</p>
            </div> -->

            <!-- DIMENSION -->
            <div v-if="sizeImageUrl" class="mt-10">
              <h3 class="text-2xl font-bold uppercase tracking-[2px] mb-6">DIMENSION</h3>
              <div class="w-[370px] h-[300px] flex items-center justify-center overflow-hidden">
                <img
                  :src="dimensionImage"
                  class="max-w-full max-h-full object-contain transition duration-300"
                  @click="openZoom(dimensionImage)"
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>
          
        </div>

        

        <hr class="border-gray-300"/>

        <!-- Marketplace Section -->
        <div class="py-20 px-4">
          <div class="text-center mb-12">    
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Choose Your Marketplace</h1>
            <p class="text-gray-500 max-w-md mx-auto">Find our products on your favorite marketplace</p>
          </div>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
            <!-- Shopee Card -->
            <a 
              :href="product.shopee_url || 'https://shopee.co.id/glatinopremium'" 
              target="_blank"
              class="group relative w-full sm:w-64 p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(238,77,45,0.15)] hover:border-orange-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            > 
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
              :href="product.tokopedia_url || 'https://tokopedia.com/glatinopremium'" 
              target="_blank"
              class="group relative w-full sm:w-64 p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(3,168,87,0.15)] hover:border-green-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
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

        <!-- Recommended Products Section -->
        <section>
          <h1 class="text-4xl text-center font-semibold text-gray-500 py-20">
            OUR GLATINO PREMIUM PRODUCTS YOU MAY WANT TO EXPLORE
          </h1>

          <!-- Loading Recommended -->
          <div v-if="loadingRecommended" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            <div v-for="i in 5" :key="i" class="h-[352px] bg-gray-200 rounded-3xl animate-pulse"></div>
          </div>

          <!-- Recommended Products Grid -->
          <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            <div
              v-for="recProduct in recommendedProducts"
              :key="recProduct.id"
              @click="goToDetail(recProduct)"
              class="relative w-full h-auto rounded-3xl overflow-hidden group cursor-pointer border-4 border-red-100 shadow-lg shadow-red-300/50 flex flex-col bg-white hover:shadow-xl hover:shadow-red-400/60 transition-all duration-300"
            >
              <!-- Product Image with Fixed Height -->
              <div class="h-64 relative p-4 bg-gray-50">
                <CachedImg
                  :src="getProductImage(recProduct)"
                  :alt="recProduct.product_name"
                  class="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <!-- Product Info - Fixed Height -->
              <div class="bg-gray-100 rounded-t-3xl shrink-0 h-24 flex flex-col justify-center">
                <p class="text-center px-3 m-0 uppercase font-semibold text-xs md:text-sm leading-tight line-clamp-2">
                  {{ recProduct.product_name }}
                </p>
                <p class="text-center px-3 m-0 text-gray-500 font-normal text-xs mt-1">
                  {{ recProduct.product_code }}
                </p>
              </div>
            </div>
          </div>

          <!-- No Recommended Products -->
          <div v-if="!loadingRecommended && recommendedProducts.length === 0" class="text-center py-12">
            <p class="text-gray-400">No recommended products available</p>
          </div>
        </section>

        <div class="py-16"></div>
      </div>
    </template>
  </div>
  
  <FooterComponent />

  <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center"
        @click.self="closeZoom"
      >
        <!-- Close Button -->
        <button
          @click="closeZoom"
          class="absolute top-4 right-4 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-100 transition"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Zoom Controls -->
        <div class="absolute top-4 left-4 z-10 bg-gray-100 rounded-lg shadow-lg p-2 flex gap-2">
          <button
            @click="zoomIn"
            class="p-2 hover:bg-gray-100 rounded transition"
            title="Zoom In"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </button>
          <button
            @click="zoomOut"
            class="p-2 hover:bg-gray-100 rounded transition"
            title="Zoom Out"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            </svg>
          </button>
          <button
            @click="resetZoom"
            class="p-2 hover:bg-gray-100 rounded transition"
            title="Reset"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <!-- Zoom Level Indicator -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-gray-100 rounded-full px-4 py-2 shadow-lg">
          <span class="text-sm font-medium">{{ Math.round(zoomLevel * 100) }}%</span>
        </div>

        <!-- Image Container -->
        <div 
          ref="zoomContainer"
          class="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
          @mousedown="startDrag"
          @mousemove="drag"
          @mouseup="stopDrag"
          @mouseleave="stopDrag"
          @wheel.prevent="handleWheel"
          @click="handleImageClick"
        >
          <img
            ref="zoomImageElement"
            :src="zoomImage"
            alt="Zoom View"
            class="select-none pointer-events-none max-w-full max-h-full object-contain"
            :style="{
              transform: `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`,
              transformOrigin: 'center center',
              transition: isAnimating ? 'transform 0.3s ease-out' : 'none'
            }"
          />
        </div>
      </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import FooterComponent from '~/components/footer.vue'

// Use dedicated layout that allows horizontal scroll
definePageMeta({ layout: 'detail' })

// Render page at 1080px desktop width with no scale-down.
// On mobile, user sees a 1:1 window into the 1080px layout and can scroll left/right.
useHead({
  meta: [{ name: 'viewport', content: 'width=1080, initial-scale=1.0, user-scalable=yes' }]
})

// ===== ZOOM STATE =====
const isZoomOpen = ref(false)
const zoomImage = ref('')
const zoomLevel = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const isDragging = ref(false)
const dragStartX = ref(0)
const dragStartY = ref(0)
const lastTranslateX = ref(0)
const lastTranslateY = ref(0)
const isAnimating = ref(false)
const zoomContainer = ref<HTMLElement | null>(null)
const zoomImageElement = ref<HTMLImageElement | null>(null)

  function openZoom(img: string) {
  zoomImage.value = img
  isZoomOpen.value = true
  resetZoom()
}

function closeZoom() {
  isZoomOpen.value = false
  resetZoom()
}

function resetZoom() {
  isAnimating.value = true
  zoomLevel.value = 1
  translateX.value = 0
  translateY.value = 0
  lastTranslateX.value = 0
  lastTranslateY.value = 0
  isDragging.value = false
  setTimeout(() => { isAnimating.value = false }, 300)
}

function zoomIn() {
  isAnimating.value = true
  zoomLevel.value = Math.min(zoomLevel.value + 0.5, 5)
  setTimeout(() => { isAnimating.value = false }, 300)
}

function zoomOut() {
  isAnimating.value = true
  zoomLevel.value = Math.max(zoomLevel.value - 0.5, 1)
  if (zoomLevel.value === 1) {
    translateX.value = 0
    translateY.value = 0
    lastTranslateX.value = 0
    lastTranslateY.value = 0
  }
  setTimeout(() => { isAnimating.value = false }, 300)
}

function handleImageClick(e: MouseEvent) {
  e.stopPropagation()
  isAnimating.value = true
  if (zoomLevel.value < 2) {
    zoomLevel.value = 2
  } else {
    zoomLevel.value = 1
    translateX.value = 0
    translateY.value = 0
    lastTranslateX.value = 0
    lastTranslateY.value = 0
  }
  setTimeout(() => { isAnimating.value = false }, 300)
}

function handleWheel(e: WheelEvent) {
  e.preventDefault()
  const delta = e.deltaY > 0 ? -0.1 : 0.1
  isAnimating.value = false
  zoomLevel.value = Math.max(1, Math.min(5, zoomLevel.value + delta))
  if (zoomLevel.value === 1) {
    translateX.value = 0
    translateY.value = 0
    lastTranslateX.value = 0
    lastTranslateY.value = 0
  }
}

function startDrag(e: MouseEvent) {
  if (zoomLevel.value <= 1) return
  isDragging.value = true
  dragStartX.value = e.clientX - lastTranslateX.value
  dragStartY.value = e.clientY - lastTranslateY.value
  isAnimating.value = false
}

function drag(e: MouseEvent) {
  if (!isDragging.value || zoomLevel.value <= 1) return
  const maxTranslate = 500 * zoomLevel.value
  translateX.value = Math.max(-maxTranslate, Math.min(maxTranslate, e.clientX - dragStartX.value))
  translateY.value = Math.max(-maxTranslate, Math.min(maxTranslate, e.clientY - dragStartY.value))
}

function stopDrag() {
  if (isDragging.value) {
    lastTranslateX.value = translateX.value
    lastTranslateY.value = translateY.value
  }
  isDragging.value = false
}

// ============================================
// INTERFACES
// ============================================
interface Category {
  id: number
  category_name: string
}

interface Material {
  id: number
  material_name: string
}

interface ProductImage {
  id: number
  product_id: number
  image_url: string
  is_primary: boolean
}

interface SizeImage {
  id: number
  product_id: number
  image_url: string
}

interface Product {
  id: number
  product_name: string
  product_code: string
  category_id: number
  color: string
  description: string
  shopee_url?: string
  tokopedia_url?: string
  category?: Category
  material?: Material
  materials?: Material[]
  images?: ProductImage[]
  image_url?: string
  size_image?: SizeImage
}

// ============================================
// API BASE URL
// ============================================
const API_BASE = 'https://backend-brand-website.vercel.app/api/api'

// ============================================
// STATE
// ============================================
const route = useRoute()
const router = useRouter()

// Shared state dengan product.vue untuk passing data tanpa API call
const pendingProduct = useState<Product | null>('detail-page-product', () => null)

const product = ref<Product | null>(null)
const recommendedProducts = ref<Product[]>([])
const selectedImage = ref<string>('')
const sizeImageUrl = ref<string>('')

const loading = ref(true)
const loadingRecommended = ref(true)
const error = ref<string | null>(null)

// ============================================
// COMPUTED
// ============================================

// Get all product images
const productImages = computed<string[]>(() => {
  if (!product.value) return []
  
  if (product.value.images && product.value.images.length > 0) {
    // Mulai dari gambar ke-2 (index 1); gambar pertama hanya untuk thumbnail di product list
    return product.value.images.slice(1).map(img => img.image_url)
  }
  
  if (product.value.image_url) {
    return [product.value.image_url]
  }
  
  return ['/placeholder.png']
})

// Get dimension image
const dimensionImage = computed<string>(() => {
  return sizeImageUrl.value
})

// TYPE: only shown for specific product IDs
const PRODUCT_TYPE_MAP: Record<number, string> = {
  98: 'No Brake', 99: 'With Brake',
  100: 'No Brake', 101: 'No Brake', 102: 'With Brake',
  103: 'No Brake', 104: 'With Brake', 105: 'No Brake',
  106: 'With Brake', 107: 'No Brake', 108: 'With Brake',
  109: 'Fixed', 110: 'Swivel', 111: 'Swivel With Brake',
  112: 'Fixed', 113: 'Swivel', 114: 'Swivel With Brake',
}

const productType = computed<string | null>(() => {
  if (!product.value) return null
  return PRODUCT_TYPE_MAP[product.value.id] ?? null
})

// ============================================
// API FUNCTIONS
// ============================================

// Fetch Product Detail
// NOTE: Backend tidak punya route GET /products/{id}, jadi fetch semua lalu filter by ID
const fetchProduct = async (productId: string | number) => {
  try {
    loading.value = true
    error.value = null

    const response = await axios.get(`${API_BASE}/products/`)
    const data = response.data
    const products: Product[] = Array.isArray(data) ? data : (data?.data ?? [])

    const found = products.find(p => p.id === Number(productId))
    if (!found) {
      error.value = 'Product not found'
      return
    }

    applyProductData(found)
    console.log('✅ Product loaded:', product.value)

  } catch (err: any) {
    console.error('❌ Error fetching product:', err)
    error.value = `Failed to load product (Status: ${err.response?.status ?? 'Network Error'})`
  } finally {
    loading.value = false
  }
}

// Fetch Size Image
const fetchSizeImage = async (productId: string | number) => {
  try {
    const response = await axios.get(`${API_BASE}/product-size-image/${productId}`)
    const data = response.data
    const images = data?.data ?? data
    if (Array.isArray(images) && images.length > 0) {
      sizeImageUrl.value = images[0].image_url
    } else if (images?.image_url) {
      sizeImageUrl.value = images.image_url
    }
  } catch (err) {
    console.error('❌ Error fetching size image:', err)
    sizeImageUrl.value = ''
  }
}

// Fetch Recommended Products
const fetchRecommendedProducts = async (productId: string | number) => {
  try {
    loadingRecommended.value = true
    
    // Try to use recommended endpoint, fallback to general products
    let response
    try {
      response = await axios.get(`${API_BASE}/products/${productId}/recommended/`)
    } catch {
      // Fallback: get products from same category
      if (product.value?.category_id) {
        response = await axios.get(`${API_BASE}/products/filter?category_id=${product.value.category_id}`)
      } else {
        response = await axios.get(`${API_BASE}/products/`)
      }
    }
    
    let data = response.data
    let products: Product[] = []
    
    if (Array.isArray(data)) {
      products = data
    } else if (data?.data) {
      products = data.data
    } else if (data?.results) {
      products = data.results
    }
    
    // Filter out current product and limit to 4
    recommendedProducts.value = products
      .filter(p => p.id !== Number(productId))
      .slice(0, 4)
    
    console.log('✅ Recommended products loaded:', recommendedProducts.value)
    
  } catch (err) {
    console.error('❌ Error fetching recommended products:', err)
    recommendedProducts.value = []
  } finally {
    loadingRecommended.value = false
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

// Helper: terapkan data produk ke state lokal + set gambar
const applyProductData = (data: Product) => {
  product.value = data

  // Ekstrak size_image yang sudah di-embed di response products/
  if (data.size_image?.image_url) {
    sizeImageUrl.value = data.size_image.image_url
  }

  if (data.images && data.images.length > 0) {
    // Preview mulai dari gambar ke-2 (index 1); fallback ke index 0 jika hanya ada 1 gambar
    selectedImage.value = data.images[1]?.image_url ?? data.images[0]!.image_url
  } else if (data.image_url) {
    selectedImage.value = data.image_url
  } else {
    selectedImage.value = '/placeholder.png'
  }
}

// Navigate to detail page, passing product data via useState
const goToDetail = (prod: Product) => {
  pendingProduct.value = prod
  router.push({
    path: '/detail',
    query: { id: String(prod.id) }
  })
}

// Get product image
const getProductImage = (prod: Product): string => {
  if (prod.images && prod.images.length > 0) {
    const primaryImage = prod.images.find(img => img.is_primary)
    return primaryImage?.image_url || prod.images[0]!.image_url
  }
  return prod.image_url || '/placeholder.png'
}

// Handle image error
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/placeholder.png'
}

// ============================================
// LIFECYCLE
// ============================================
onMounted(async () => {
  const productId = route.query.id as string

  if (pendingProduct.value) {
    applyProductData(pendingProduct.value)
    pendingProduct.value = null
    loading.value = false
    if (productId) {
      // Jalankan paralel; fetchSizeImage sebagai fallback jika size_image tidak ada di data
      await Promise.all([
        fetchRecommendedProducts(productId),
        ...(sizeImageUrl.value ? [] : [fetchSizeImage(productId)]),
      ])
    }
    return
  }

  // Refresh / akses langsung via URL
  if (productId) {
    await fetchProduct(productId)
    await Promise.all([
      fetchRecommendedProducts(productId),
      ...(sizeImageUrl.value ? [] : [fetchSizeImage(productId)]),
    ])
  } else {
    error.value = 'Product ID not found'
    loading.value = false
  }
})

// Watch for route changes (navigasi antar produk tanpa remount)
watch(() => route.query.id, async (newId) => {
  if (newId) {
    sizeImageUrl.value = ''
    if (pendingProduct.value) {
      applyProductData(pendingProduct.value)
      pendingProduct.value = null
      loading.value = false
      await Promise.all([
        fetchRecommendedProducts(newId as string),
        ...(sizeImageUrl.value ? [] : [fetchSizeImage(newId as string)]),
      ])
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    await fetchProduct(newId as string)
    await Promise.all([
      fetchRecommendedProducts(newId as string),
      ...(sizeImageUrl.value ? [] : [fetchSizeImage(newId as string)]),
    ])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
</script>

<style>
.font-gotham {
  font-family: 'Gotham', sans-serif;
}

/* Fitur Zoom */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Line clamp for text truncation */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ===== SCROLLBAR UTAMA ===== */
.custom-scroll::-webkit-scrollbar {
  width: 14px;
}

.custom-scroll::-webkit-scrollbar-button {
  display: none;
}

.custom-scroll::-webkit-scrollbar-track {
  background: #eeeeee;
  border-radius: 20px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #9e9e9e;
  border-radius: 20px;
  border: 3px solid #eeeeee;
  background-clip: padding-box;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: #9e9e9e;
}

.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: #bdbdbd #eeeeee;
}

/* Spin animation for loading */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>