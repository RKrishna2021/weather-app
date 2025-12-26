import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Make sure this says 'plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})