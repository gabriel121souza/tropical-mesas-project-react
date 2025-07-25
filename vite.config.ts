// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist', // Garanta que é 'dist' para Vite
    emptyOutDir: true
  }
})