import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import Projects from './pages/Projects.vue';
import AppNotFound from './pages/AppNotFound.vue';
import ShowProject from './pages/ShowProject.vue';



const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'home',
            component: AppHome,
        },
        {
            path:'/projects',
            name: 'projects',
            component: Projects,
        },
        {
            path: '/projects/:slug',
            name: 'show-project',
            component: ShowProject,
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: AppNotFound,
        },
        
    ]
});

export {router}