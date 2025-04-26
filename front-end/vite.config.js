import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,  // Escuchar en todas las interfaces
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true  // Necesario para Docker
    }
  },
  plugins: [react()],
})
