import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  css: [
    // CSS file in the project
    '@/assets/styles/main.css',
  ],
  publicRuntimeConfig: {
    SCANTIST_LOGO_PATH: process.env.SCANTIST_LOGO_PATH
  },  
})
