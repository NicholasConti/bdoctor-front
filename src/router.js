import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import InfoDoctor from './pages/InfoDoctor.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/details',
            name: 'InfoDoctor',
            component: InfoDoctor
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFoundPage',
            component: NotFoundPage
        }
    ]
});

export { router };