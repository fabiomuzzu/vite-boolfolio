import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import Projects from './pages/Projects.vue';

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
        
    ]
});

export {router}