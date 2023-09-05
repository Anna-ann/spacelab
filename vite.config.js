import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createI18n } from 'vue-i18n';

export default defineConfig({
  root: './',
  plugins: [vue()],
  optimizeDeps: {
    include: ['vue-i18n'],
  },
})
