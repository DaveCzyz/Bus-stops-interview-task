import vue from '@vitejs/plugin-vue';
import path from 'path'

export default {
    plugins: [vue()],
    test: {
        environment: 'jsdom',
        include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
        exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
        deps: {
            optimizer: {
                web: {
                    include: ['vuex', 'vue-router']
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
}
