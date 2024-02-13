import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../components/componentsHome/AppHome.vue';
import AppBadge from '../components/componentsService/AppBadge.vue';
import AppUsers from '../components/componentsService/AppUsers.vue';

const routes = [
    {name: 'Home', path: '/', component: AppHome},
    {name: 'Servises/Badges', path: '/Servises/Badges', component: AppBadge},
    {name: 'Servises/Users', path: '/Servises/Users', component: AppUsers},
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;