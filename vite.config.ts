import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // dev mode for prod
  server: {
    host: '0.0.0.0',  // Allow access from all networks
    port: 3000,       // You can change this port if needed
  }
})
