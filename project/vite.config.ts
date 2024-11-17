import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'robots.txt', 'og-image.jpg'],
      manifest: {
        name: 'معدن نما ایران',
        short_name: 'معدن نما',
        description: 'معدن‌نما؛ صداقت در معامله، شفافیت در اطلاعات'
      }
      
    })
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['swiper', 'react-loading-skeleton', 'react-intersection-observer']
        }
      }
    }
  },
  server: {
    host: true,
    port: 3000,
    open: true
  }});