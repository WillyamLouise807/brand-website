<template>
  <!-- NAVBAR -->
  <header
    class="z-50 bg-white shadow font-gotham"
    :style="isMobileDevice ? {
      position: 'fixed',
      top: vpTop + 'px',
      left: vpLeft + 'px',
      width: navbarWidth + 'px'
    } : {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0'
    }"
  >
    <div :class="isMobileDevice ? 'px-4' : 'container mx-auto'">
      <div class="flex items-center p-4 h-20">

        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/">
            <img src="/logo.png" class="h-10 lg:h-12 w-auto" />
          </NuxtLink>
        </div>

        <!-- Desktop Menu (only on actual desktop devices) -->
        <div v-if="!isMobileDevice" class="flex flex-1">
          <div class="flex justify-center gap-8 font-semibold w-full">
            <NuxtLink to="/" class="nav-link" exact>Home</NuxtLink>
            <NuxtLink
              to="/product"
              :class="['nav-link', { 'active-product': isProductActive }]"
            >
              Product
            </NuxtLink>
            <NuxtLink to="/e-catalog" class="nav-link">E-Catalogue</NuxtLink>
            <NuxtLink to="/contact-us" class="nav-link">Contact Us</NuxtLink>
          </div>
        </div>

        <!-- Desktop Search (only on actual desktop devices) -->
        <div v-if="!isMobileDevice" class="flex w-64 items-center">
          <div class="relative w-full">
            <input
              type="text"
              placeholder="Search Product..."
              class="w-full rounded-full bg-gray-200 py-2 pl-5 pr-12 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Hamburger Button (only on mobile devices) -->
        <div v-if="isMobileDevice" class="flex ml-auto">
          <button
            @click="toggleMenu"
            class="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Slide-down Menu -->
    <div
      v-if="isMobileDevice"
      v-show="mobileMenuOpen"
      class="bg-white border-t border-gray-100 shadow-lg"
    >
      <div class="px-4 py-4 flex flex-col gap-1 font-semibold">
        <NuxtLink to="/" class="mobile-nav-link" exact @click="closeMenu">Home</NuxtLink>
        <NuxtLink
          to="/product"
          :class="['mobile-nav-link', { 'mobile-active': isProductActive }]"
          @click="closeMenu"
        >
          Product
        </NuxtLink>
        <NuxtLink to="/e-catalog" class="mobile-nav-link" @click="closeMenu">E-Catalogue</NuxtLink>
        <NuxtLink to="/contact-us" class="mobile-nav-link" @click="closeMenu">Contact Us</NuxtLink>

        <div class="mt-3 pt-3 border-t border-gray-100">
          <div class="relative w-full">
            <input
              type="text"
              placeholder="Search Product..."
              class="w-full rounded-full bg-gray-200 py-2 pl-5 pr-12 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- KONTEN: no overflow-x-hidden so horizontal scroll is allowed on mobile -->
  <main class="pt-20">
    <slot />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Use screen.width to detect mobile — not affected by viewport meta width=1080.
// Default true to avoid flashing desktop navbar on mobile before mount.
const isMobileDevice = ref(true)

// Visual viewport: width = actual visible CSS pixels (more reliable than screen.width on Android)
const navbarWidth = ref(390)
const vpTop = ref(0)
const vpLeft = ref(0)
let vpHandler: (() => void) | null = null

onMounted(() => {
  isMobileDevice.value = window.screen.width < 1024

  if (isMobileDevice.value && window.visualViewport) {
    vpHandler = () => {
      navbarWidth.value = window.visualViewport!.width
      vpTop.value = window.visualViewport!.offsetTop
      vpLeft.value = window.visualViewport!.offsetLeft
    }
    window.visualViewport.addEventListener('scroll', vpHandler)
    window.visualViewport.addEventListener('resize', vpHandler)
    vpHandler() // run once immediately
  }
})

onUnmounted(() => {
  if (window.visualViewport && vpHandler) {
    window.visualViewport.removeEventListener('scroll', vpHandler)
    window.visualViewport.removeEventListener('resize', vpHandler)
  }
})

const isProductActive = computed(() => {
  return route.path.startsWith('/product') || route.path.startsWith('/detail')
})

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 6px;
}

.nav-link.router-link-active {
  color: #ef4444;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #ef4444;
  border-radius: 9999px;
}

.active-product {
  color: #ef4444;
}

.active-product::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #ef4444;
  border-radius: 9999px;
}

.mobile-nav-link {
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  color: #374151;
  transition: background-color 0.2s, color 0.2s;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background-color: #fef2f2;
  color: #ef4444;
}

.mobile-active {
  background-color: #fef2f2;
  color: #ef4444;
}

.font-gotham {
  font-family: 'Gotham', sans-serif;
}
</style>
