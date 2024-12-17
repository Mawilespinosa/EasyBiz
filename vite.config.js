import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://Mawilespinosa.github.io/EasyBiz",
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import 'bootstrap/dist/css/bootstrap.min.css';`,
      },
    },
  },
})
