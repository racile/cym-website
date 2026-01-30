import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Get __dirname equivalent in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Custom plugin to minify specific static assets in the dist folder
const minifyAssets = () => {
  return {
    name: 'minify-assets',
    // Minify HTML during build
    transformIndexHtml(html: string) {
      return html
        .replace(/>\s+</g, '><') // Remove whitespace between tags
        .replace(/\s{2,}/g, ' ') // Collapse multiple spaces
        .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    },
    // Minify JSON and XML after build is complete
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const filesToMinify = [
        { name: 'manifest.json', type: 'json' },
        { name: 'browserconfig.xml', type: 'xml' },
      ]

      filesToMinify.forEach((file) => {
        const filePath = path.join(distDir, file.name)
        if (fs.existsSync(filePath)) {
          let content = fs.readFileSync(filePath, 'utf-8')
          if (file.type === 'json') {
            try {
              content = JSON.stringify(JSON.parse(content))
            } catch (e) {
              console.error(`Failed to minify ${file.name}:`, e)
            }
          } else if (file.type === 'xml') {
            content = content
              .replace(/>\s+</g, '><') // Remove whitespace between tags
              .replace(/\s{2,}/g, ' ') // Collapse multiple spaces
              .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
          }
          fs.writeFileSync(filePath, content)
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    vue(),
    tailwindcss(),
    minifyAssets(),
    // vueDevTools(),
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name?.split('.').at(1)
          if (extType && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          if (extType && /css/i.test(extType)) {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
