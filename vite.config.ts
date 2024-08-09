import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  plugins: [typescript()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MDImage',
      fileName: (format) => `MDImage.${format === 'es' ? 'js' : 'umd.cjs'}`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
})
