import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://creative-mudassir.github.io/earth-block/ on GitHub Pages
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/earth-block/' : '/',
}))
