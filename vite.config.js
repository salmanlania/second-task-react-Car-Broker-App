import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: false, // Set to true if using CSS modules
    postcss: {}, // PostCSS options
  },
})
