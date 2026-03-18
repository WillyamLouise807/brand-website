<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <!-- Skeleton overlay, hilang setelah gambar loaded -->
    <div
      v-if="!loaded"
      class="absolute inset-0 bg-gray-200 animate-pulse rounded"
    />
    <img
      v-bind="$attrs"
      :src="src"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

// Module-level Set: persists selama satu sesi tab (tidak reset saat komponen di-mount ulang)
const imageCache = new Set<string>()

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  src: string
}>()

const loaded = ref(imageCache.has(props.src))

// Jika src berubah (navigasi ke produk lain), cek cache lagi
watch(() => props.src, (newSrc) => {
  loaded.value = imageCache.has(newSrc)
})

function onLoad() {
  imageCache.add(props.src)
  loaded.value = true
}

function onError(e: Event) {
  ;(e.target as HTMLImageElement).src = '/placeholder.png'
  loaded.value = true
}
</script>
