import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      // 默认值
      include: /\.(jsx?|tsx?|vue|svelte)$/,
      // 默认值
      exclude: /node_modules/,
      // 默认值为：true
      cache: false
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
