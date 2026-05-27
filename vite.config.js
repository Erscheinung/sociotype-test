import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sociotype-test/',
  build: {
    outDir: 'build'
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
