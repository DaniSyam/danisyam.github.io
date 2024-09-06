import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    cssMinify: true,
    manifest: 'manifest.json',
    assetsDir: '', // Ini akan mencegah Vite membuat folder 'assets'
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          'libs/solidjs': ['solid-js', 'solid-js/web'],
          'libs/solidjs-router': ['@solidjs/router'],
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.woff2')) return 'fonts/[name].[hash].[ext]'
          if (assetInfo.name?.endsWith('.png') || assetInfo.name?.endsWith('.svg')) return 'img/[name].[hash].[ext]'
          return '[name].[hash].[ext]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  plugins: [solid()],
})
