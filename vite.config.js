import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/saurabh-ubale",
  plugins: [react()],
  server: {
    port: 8001,
  },
});
