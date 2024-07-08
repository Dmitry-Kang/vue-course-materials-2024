import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],

  build: {
    rollupOptions: {
      input: {
        '01-basics': resolve(__dirname, '01-basics/index.html'),
        '02-basics-2': resolve(__dirname, '02-basics-2/index.html'),
        '03-components': resolve(__dirname, '03-components/index.html'),
        '04-sfc--01-style-in-sfc': resolve(__dirname, '04-sfc/01-style-in-sfc/index.html'),
        '04-sfc--02-sfc-setup': resolve(__dirname, '04-sfc/02-sfc-setup/index.html'),
        '04-sfc--03-ts': resolve(__dirname, '04-sfc/03-ts/index.html'),
      },
    },
  },
})
