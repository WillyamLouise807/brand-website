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
              <nuxt-link to="/" class="text-sm text-black hover:text-gray-900">HOME</nuxt-link>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <svg viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                  <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span class="ml-2 text-sm text-black">PRODUCT</span>
              </div>
            </li>
            <!-- Show selected category in breadcrumb -->
            <li v-if="selectedCategoryName">
              <div class="flex items-center">
                <svg viewBox="0 0 24 24" fill="none" class="w-4 h-4">
                  <path d="M16 3L8 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span class="ml-2 text-sm text-red-600 font-semibold">{{ selectedCategoryName }}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Filter Section -->
      <section>
        <!-- Red Background -->
        <div class="bg-red-600 rounded-3xl w-full py-12 text-center relative">
          <h1 class="text-white text-4xl font-bold mb-12">
            FIND OUR PRODUCTS
          </h1>
        </div>

        <!-- Dark Red Background - Filter Controls -->
        <div class="bg-red-900 -mt-10 relative
              grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_auto] 
              items-end
              gap-4
              rounded-3xl 
              max-w-7xl
              mx-auto
              px-8 py-6">
          
          <!-- Product Categories Filter -->
          <div class="text-white">
            <p class="mb-2">Product Categories</p>
            <select 
              v-model="filters.category_id" 
              @change="applyFilters"
              class="w-full rounded-md px-3 py-2 text-sm text-black"
              :disabled="loadingCategories"
            >
              <option value="">All Categories</option>
              <option 
                v-for="category in categories" 
                :key="category.id" 
                :value="category.id"
              >
                {{ category.category_name }}
              </option>
            </select>
          </div>

          <!-- Finishing Filter -->
          <div class="text-white">
            <p class="mb-2">Finishing</p>
            <select 
              v-model="filters.finishing" 
              @change="applyFilters"
              class="w-full rounded-md px-3 py-2 text-sm text-black"
            >
              <option value="">All Finishing</option>
              <option 
                v-for="finish in finishingOptions" 
                :key="finish" 
                :value="finish"
              >
                {{ finish }}
              </option>
            </select>
          </div>

          <!-- Material Filter -->
          <div class="text-white">
            <p class="mb-2">Material</p>
            <select 
              v-model="filters.material_id" 
              @change="applyFilters"
              class="w-full rounded-md px-3 py-2 text-sm text-black"
              :disabled="loadingMaterials"
            >
              <option value="">All Materials</option>
              <option 
                v-for="material in materials" 
                :key="material.id" 
                :value="material.id"
              >
                {{ material.material_name }}
              </option>
            </select>
          </div>

          <!-- Search Bar -->
          <div class="text-white">
            <p class="mb-2">Product Name / Code</p>
            <input 
              v-model="searchQuery" 
              @keyup.enter="handleSearch"
              type="text" 
              class="w-full rounded-md px-3 py-2 text-sm text-black" 
              placeholder="Search product name or code..."
            >
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button 
              @click="handleSearch"
              class="bg-red-600 text-white items-center flex justify-center rounded-xl h-10 w-10 hover:bg-red-700 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Clear Filter Button (show when filter is active) -->
        <div v-if="isFilterActive" class="flex justify-center mt-6">
          <button 
            @click="clearFilters"
            class="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear Filters
          </button>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- CONDITIONAL DISPLAY: CATEGORIES OR PRODUCTS -->
      <!-- ============================================ -->

      <!-- CONDITION 1: Show Categories (Filter NOT Active) -->
      <div v-if="!isFilterActive && !loadingProducts">
        <h1 class="font-bold uppercase text-3xl text-center py-12">Categories</h1>
        
        <!-- Loading Categories -->
        <div v-if="loadingCategories" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="h-[500px] bg-gray-200 rounded-2xl animate-pulse"></div>
        </div>

        <!-- Categories Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center items-center">
          <div 
            v-for="category in categories" 
            :key="category.id"
            @click="selectCategory(category)"
            class="cursor-pointer"
          >
            <div class="relative w-full h-[500px] rounded-2xl overflow-hidden group border-4 border-red-100 shadow-lg shadow-red-300/50 hover:shadow-xl hover:shadow-red-400/60 transition-all duration-300">
              <!-- Background Image -->
              <div 
                class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                :style="{ backgroundImage: `url(${category.image_url || '/placeholder.png'})` }"
              >
                <!-- Overlay Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              <!-- Information Box - Positioned at bottom -->
              <div class="absolute bottom-0 left-0 right-0">
                <div class="bg-white/80 backdrop-blur-sm rounded-t-xl py-4 px-6 flex items-center justify-between shadow-lg">
                  <!-- Left Side - Text Information -->
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-900 mb-1">{{ category.category_name.toUpperCase() }}</h3>
                    <p class="text-gray-600 text-sm">View Products</p>
                  </div>

                  <!-- Right Side - Arrow Icon -->
                  <div class="ml-4">
                    <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty Categories -->
        <div v-if="!loadingCategories && categories.length === 0" class="text-center py-16">
          <p class="text-gray-500 text-lg">No categories available</p>
        </div>
      </div>

      <!-- CONDITION 2: Show Products (Filter IS Active) -->
      <div v-if="isFilterActive || loadingProducts">
        <!-- Products Count -->
        <div class="mb-8 mt-12 font-gotham">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center">
              <li class="inline-flex items-center">
                <span class="text-sm text-black">
                  <span class="font-semibold">{{ products.length }}</span> PRODUCT{{ products.length !== 1 ? 'S' : '' }} AVAILABLE
                </span>
              </li>            
            </ol>
          </nav>
        </div>

        <!-- Loading Products -->
        <div v-if="loadingProducts" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          <div v-for="i in 10" :key="i" class="h-[400px] bg-gray-200 rounded-3xl animate-pulse"></div>
        </div>

        <!-- Products Grid -->
        <div v-else-if="products.length > 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center items-center">
          <nuxt-link 
            v-for="product in products" 
            :key="product.id"
            :to="`/product/${product.id}`"
            class="relative w-full h-[400px] rounded-3xl overflow-hidden group cursor-pointer border-4 border-red-100 shadow-lg shadow-red-300/50 flex flex-col hover:shadow-xl hover:shadow-red-400/60 transition-all duration-300"
          >
            <!-- Product Image -->
            <div class="flex-1 relative overflow-hidden">
              <img 
                :src="getProductImage(product)" 
                :alt="product.product_name"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                @error="handleImageError"
              >
            </div>
            
            <!-- Product Info -->
            <div class="bg-gray-100 rounded-t-3xl">
              <p class="text-center py-6 px-4 m-0 uppercase font-semibold text-sm md:text-base lg:text-lg">
                {{ product.product_name }} {{ product.product_code }}
              </p>
            </div>
          </nuxt-link>
        </div>

        <!-- No Products Found -->
        <div v-else class="text-center py-16">
          <svg class="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-500 text-xl mb-2">No products found</p>
          <p class="text-gray-400 text-sm">Try adjusting your filters or search terms</p>
          <button 
            @click="clearFilters"
            class="mt-6 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>

    </div>    

  </div>
  <FooterComponent />
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import FooterComponent from '~/components/footer.vue'
import BannerProduct from '~/components/banner-product.vue'

// ============================================
// TYPESCRIPT INTERFACES
// ============================================
interface Category {
  id: number
  category_name: string
  image_url: string | null
}

interface Material {
  id: number
  material_name: string
}

interface Product {
  id: number
  product_name: string
  product_code: string
  category_id: number
  material_id: number
  finishing: string
  description: string
  images?: ProductImage[]
  image_url?: string
}

interface ProductImage {
  id: number
  product_id: number
  image_url: string
  is_primary: boolean
}

interface Filters {
  category_id: string | number
  material_id: string | number
  finishing: string
}

// ============================================
// API BASE URL
// ============================================
const API_BASE = 'https://backend-brand-website.vercel.app/api/api'

// ============================================
// STATE
// ============================================
const route = useRoute()

// Data from API
const categories = ref<Category[]>([])
const materials = ref<Material[]>([])
const products = ref<Product[]>([])

// Loading states
const loadingCategories = ref(true)
const loadingMaterials = ref(true)
const loadingProducts = ref(false)

// Filter states
const filters = ref<Filters>({
  category_id: '',
  material_id: '',
  finishing: ''
})

const searchQuery = ref('')
const selectedCategoryName = ref('')

// Finishing options (bisa di-hardcode atau ambil dari API jika ada)
const finishingOptions = ref([
  'Chrome',
  'Satin Nickel',
  'Antique Brass',
  'Black',
  'Gold',
  'Bronze',
  'Stainless Steel'
])

// ============================================
// COMPUTED
// ============================================

// Check if any filter is active
const isFilterActive = computed(() => {
  return (
    filters.value.category_id !== '' ||
    filters.value.material_id !== '' ||
    filters.value.finishing !== '' ||
    searchQuery.value.trim() !== ''
  )
})

// ============================================
// API FUNCTIONS
// ============================================

// Fetch Categories
const fetchCategories = async () => {
  try {
    loadingCategories.value = true
    const response = await axios.get(`${API_BASE}/categories/`)
    
    let data = response.data
    if (Array.isArray(data)) {
      categories.value = data
    } else if (data?.data) {
      categories.value = data.data
    } else if (data?.results) {
      categories.value = data.results
    }
    
    console.log('✅ Categories loaded:', categories.value)
  } catch (error) {
    console.error('❌ Error fetching categories:', error)
  } finally {
    loadingCategories.value = false
  }
}

// Fetch Materials
const fetchMaterials = async () => {
  try {
    loadingMaterials.value = true
    const response = await axios.get(`${API_BASE}/materials/`)
    
    let data = response.data
    if (Array.isArray(data)) {
      materials.value = data
    } else if (data?.data) {
      materials.value = data.data
    } else if (data?.results) {
      materials.value = data.results
    }
    
    console.log('✅ Materials loaded:', materials.value)
  } catch (error) {
    console.error('❌ Error fetching materials:', error)
  } finally {
    loadingMaterials.value = false
  }
}

// Fetch Products with Filters
const fetchProducts = async () => {
  try {
    loadingProducts.value = true
    
    // Build query params
    const params = new URLSearchParams()
    
    if (filters.value.category_id) {
      params.append('category_id', String(filters.value.category_id))
    }
    if (filters.value.material_id) {
      params.append('material_id', String(filters.value.material_id))
    }
    if (filters.value.finishing) {
      params.append('finishing', filters.value.finishing)
    }
    
    const url = params.toString() 
      ? `${API_BASE}/products/filter?${params.toString()}`
      : `${API_BASE}/products/`
    
    console.log('🔍 Fetching products from:', url)
    
    const response = await axios.get(url)
    
    let data = response.data
    if (Array.isArray(data)) {
      products.value = data
    } else if (data?.data) {
      products.value = data.data
    } else if (data?.results) {
      products.value = data.results
    }
    
    console.log('✅ Products loaded:', products.value)
  } catch (error) {
    console.error('❌ Error fetching products:', error)
    products.value = []
  } finally {
    loadingProducts.value = false
  }
}

// Search Products
const searchProducts = async () => {
  if (!searchQuery.value.trim()) {
    return fetchProducts()
  }
  
  try {
    loadingProducts.value = true
    
    const url = `${API_BASE}/products/search?q=${encodeURIComponent(searchQuery.value.trim())}`
    console.log('🔍 Searching products:', url)
    
    const response = await axios.get(url)
    
    let data = response.data
    if (Array.isArray(data)) {
      products.value = data
    } else if (data?.data) {
      products.value = data.data
    } else if (data?.results) {
      products.value = data.results
    }
    
    console.log('✅ Search results:', products.value)
  } catch (error) {
    console.error('❌ Error searching products:', error)
    products.value = []
  } finally {
    loadingProducts.value = false
  }
}

// ============================================
// HANDLER FUNCTIONS
// ============================================

// Apply filters
const applyFilters = () => {
  // Update category name for breadcrumb
  if (filters.value.category_id) {
    const category = categories.value.find(c => c.id === Number(filters.value.category_id))
    selectedCategoryName.value = category?.category_name || ''
  } else {
    selectedCategoryName.value = ''
  }
  
  fetchProducts()
}

// Handle search
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    searchProducts()
  } else {
    applyFilters()
  }
}

// Select category from card click
const selectCategory = (category: Category) => {
  filters.value.category_id = category.id
  selectedCategoryName.value = category.category_name
  fetchProducts()
}

// Clear all filters
const clearFilters = () => {
  filters.value = {
    category_id: '',
    material_id: '',
    finishing: ''
  }
  searchQuery.value = ''
  selectedCategoryName.value = ''
  products.value = []
}

// Get product image (primary or first available)
const getProductImage = (product: Product): string => {
  if (product.images && product.images.length > 0) {
    const primaryImage = product.images.find(img => img.is_primary)
    return primaryImage?.image_url || product.images[0].image_url
  }
  return product.image_url || '/placeholder.png'
}

// Handle image error
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = '/placeholder.png'
}

// ============================================
// LIFECYCLE & WATCHERS
// ============================================

onMounted(async () => {
  // Fetch filter options
  await Promise.all([
    fetchCategories(),
    fetchMaterials()
  ])
  
  // Check if category is passed via query params (from homepage)
  const categoryParam = route.query.category
  if (categoryParam) {
    filters.value.category_id = Number(categoryParam)
    const category = categories.value.find(c => c.id === Number(categoryParam))
    selectedCategoryName.value = category?.category_name || ''
    await fetchProducts()
  }
})

// Watch for route changes (when coming from homepage with category query)
watch(() => route.query.category, async (newCategory) => {
  if (newCategory) {
    filters.value.category_id = Number(newCategory)
    const category = categories.value.find(c => c.id === Number(newCategory))
    selectedCategoryName.value = category?.category_name || ''
    await fetchProducts()
  }
})
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.font-gotham {
  font-family: 'Gotham', sans-serif;
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