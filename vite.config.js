import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss({
    theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        body: ["Poppins", 'sans-serif'],
        heading: ['"Rubik"', 'sans-serif'],
      },
    },
  },
  }) ,tsconfigPaths()],
})
