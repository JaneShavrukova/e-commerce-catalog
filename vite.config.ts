import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      'modules': path.resolve(__dirname, './src/modules'),
      'contexts': path.resolve(__dirname, './src/contexts')
    },
  },
})
