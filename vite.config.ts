import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/travel-blog-sample/dist/', // GitHub Pages 用のベース URL
  plugins: [svelte()],
})
