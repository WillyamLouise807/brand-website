<template>
  <!-- NAVBAR -->
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white shadow font-gotham"
  >
    <div class="container mx-auto">
      <div class="flex items-center p-4 h-20">
        <!-- Logo -->
        <div class="w-32">
          <NuxtLink to="/">
            <img src="/logo.png" class="h-8 w-auto" />
          </NuxtLink>
        </div>

        <!-- Menu -->
        <div class="flex-1">
          <div class="flex justify-center gap-8 font-semibold">
            <NuxtLink to="/" class="nav-link" exact>Home</NuxtLink>
            <NuxtLink to="/product" class="nav-link">Product</NuxtLink>
            <NuxtLink to="/e-catalog" class="nav-link">E-Catalogue</NuxtLink>
            <NuxtLink to="/contact-us" class="nav-link">Contact Us</NuxtLink>
          </div>
        </div>

        <!-- Search -->
        <div class="w-64 flex items-center">
          <div class="relative w-full">
            <input
              type="text"
              placeholder="Search Product..."
              class="w-full rounded-full bg-gray-200 py-2 pl-5 pr-12 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <!-- icon search -->
            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- KONTEN -->
  <main class="pt-20">
    <slot />
  </main>
</template>

<script setup lang="ts">
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

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.font-gotham {
  font-family: 'Gotham', sans-serif;
}
</style>
