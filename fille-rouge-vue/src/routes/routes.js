import { createRouter, createWebHistory } from 'vue-router';


import AppUser from '../components/User/AppUser.vue';
import AppHome from '../components/User/componentsHome/AppHome.vue';
import AppBadge from '../components/User/componentsService/AppBadge.vue';
import AppUsers from '../components/User/componentsService/AppUsers.vue';
import AppTages from '../components/User/componentsService/AppTages.vue';
import AppContact from '../components/User/componentsService/AppContact.vue';
import AppProfile from '../components/User/componrntsProfile/AppProfile.vue';
import AppProfileSetting from '../components/User/componrntsProfile/AppProfileSetting.vue';
import AppMyQuistion from '../components/User/componrntsProfile/AppMyQuestion.vue';
import AppAnswers from '../components/User/componentsHome/AppAnswers.vue';
import AppAboutUs from '../components/User/componentsHome/AppAboutUs.vue';
import AppAskQuesion from '../components/User/componentsHome/AppAskQuesion.vue';


import AppAdmin from '../components/Admin/AppAdmin.vue';
import AppAdminHome from '../components/Admin/AppAdminHome.vue';
import AppAdminUsers from '../components/Admin/AppAdminUsers.vue';

import AppAuth from '../components/Auth/AppAuth.vue';
import AppAuthLogin from '../components/Auth/AppAuthLogin.vue';
import AppAuthRegister from '../components/Auth/AppAuthRegister.vue';

const routes = [
    { path: '', redirect: '/user/' },
    { 
        path: '/user',
        component: AppUser,
        children: [
            { path: '', component: AppHome },
            { path: 'home', component: AppHome },
            { path: 'Servises/Badges', component: AppBadge },
            { path: 'Servises/Users', component: AppUsers },
            { path: 'Servises/Tages', component: AppTages },
            { path: 'contactUs', component: AppContact },
            { path: 'profile', component: AppProfile },
            { path: 'settings', component: AppProfileSetting },
            { path: 'myQuestion', component: AppMyQuistion },
            { path: 'Answers', component: AppAnswers },
            { path: 'aboutUs', component: AppAboutUs },
            { path: 'AskQuesion', component: AppAskQuesion },
        ]
    },
    { 
        path: '/admin',
        component: AppAdmin,
        children: [
            { path: '', component: AppAdminHome },
            { path: 'users', component: AppAdminUsers },
        ]
    },
    { 
        path: '/user/auth',
        component: AppAuth,
        children: [
            { path: '', component: AppAuthLogin },
            { path: 'register', component: AppAuthRegister },
        ]
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
