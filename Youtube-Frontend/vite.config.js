// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,      // Tells Vite: "Always try to use 5173"
    strictPort: true // Tells Vite: "If 5173 is busy, FAIL. Do not jump to 5174."
  }
})
