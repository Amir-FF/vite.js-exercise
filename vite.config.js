import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig(() => {
    return {
        build: {
            target: 'es2015',
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    about: resolve(__dirname, 'pages/about.html'),
                    posts: resolve(__dirname, 'pages/posts.html')
                }
            }
        }
    }
})