import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/


export default defineConfig({
  server: {
    port: 9000, // 设置项目的启动端口号
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 别名配置
      '@/': resolve(__dirname, './src/*'), // 别名配置
      '@comp': resolve(__dirname, './src/components'),
      '@comp/': resolve(__dirname, './src/components/*'),
    }
  },
  // @ts-ignore
  hmr: {
    overlay: false
  },
  plugins: [vue()]
})
