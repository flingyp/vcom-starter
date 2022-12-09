import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// TODO: name fileName：vcom-starter

export default defineConfig({
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'vcom-starter',
      fileName: 'vcom-starter'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue(), dts()]
})
