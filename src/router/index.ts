import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
]

const router = createRouter({
    // Ubah ini untuk menggunakan base URL yang sesuai dengan repositori GitHub Pages Anda
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
