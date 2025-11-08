import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Store/', // 👈 مهم جداً عند النشر على GitHub Pages
})
