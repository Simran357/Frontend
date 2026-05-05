import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React + Router
          'react-core': ['react', 'react-dom', 'react-router', 'react-router-dom'],
          // Material-UI ecosystem
          'mui': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          // Charts
          'charts': ['chart.js', 'react-chartjs-2', 'recharts', '@mui/x-charts'],
          // UI Libraries
          'ui-libs': ['antd', 'lucide-react', 'react-icons', 'framer-motion', 'motion'],
          // Forms & Rich Text
'editors': ['quill', 'react-quill'],          // Heavy utilities
          'utils': ['tesseract.js', 'axios', 'jwt-decode'],
          // Other utilities
          'misc': ['@react-oauth/google', 'react-toastify'],
        }
      }
    }
  }
})
