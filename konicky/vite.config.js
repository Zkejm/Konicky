import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  base: '/app/', // Nastavenie základnej cesty pre assety
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script', // Zabezpečí správnu registráciu Service Workera
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
        'vite.svg' // Pridanie chýbajúceho súboru
      ],
      manifest: {
        name: 'Konicky',
        short_name: 'Konicky',
        start_url: '/app/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1976d2',
        icons: [
          {
            src: '/app/img/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/app/img/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'public/app',
    emptyOutDir: true
  }
})
