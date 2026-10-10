import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://hadezkz002.github.io/kiem-than/
// Keep this path in sync with the GitHub repository name.
export default defineConfig({
  plugins: [react()],
  base: '/kiem-than/',
})
