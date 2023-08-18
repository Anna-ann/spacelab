import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'src/assets/logo.svg',
        'src/assets/3d/hero-img.png',
      'src/assets/hero-bg.png', 
      'src/assets/about.jpg',
    ],
    },
  },
  plugins: [vue()],
})
