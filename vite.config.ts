import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  plugins: [typescript()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'AwesomeImageUtils',
      fileName: (format) => `awesome-image-utils.${format === 'es' ? 'js' : 'umd.cjs'}`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
})
