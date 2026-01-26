import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'firebase';
            if (id.includes('leaflet') || id.includes('react-leaflet')) return 'maps';
            if (id.includes('recharts')) return 'charts';
            if (id.includes('react') || id.includes('redux')) return 'vendor';
          }
        },
      },
    },
  },
})
