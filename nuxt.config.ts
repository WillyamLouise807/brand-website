// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  css: [
    '@/assets/css/fonts.css'
  ],

  // @ts-ignore
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  // ✅ Tambahkan ini supaya bisa jadi static site
  nitro: {
    preset: 'static'
  }
})