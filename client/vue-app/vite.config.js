
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [vue()],
 test:{
   globals:true,
 },
 transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5050',
        },
      },
    },
  },
})