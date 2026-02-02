import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/vishesh",
  optimizeDeps: {
    exclude: ['fsevents']
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        console.log('Warning:', warning);
        warn(warning);
      }
    }
  },
  server: {
    hmr: {
      overlay: true
    }
  }
})