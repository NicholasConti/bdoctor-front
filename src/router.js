import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import InfoDoctor from './pages/InfoDoctor.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import AppSearch from './pages/AppSearch.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/details/:id',
            name: 'InfoDoctor',
            component: InfoDoctor
        },
        {
            path: '/search/:text?/:spec?',
            name: 'search',
            component: AppSearch
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFoundPage',
            component: NotFoundPage
        }
    ]
});

export { router };