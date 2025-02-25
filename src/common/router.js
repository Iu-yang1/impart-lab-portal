import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/home', name: 'home', component: () => import('../components/Home.vue') },
    { path: '/status', name: 'status', component: () => import('../components/GameServerStatus.vue') },
    { path: '/worldMap', name: 'worldMap', component: () => import('../components/WorldMap.vue') },
    { path: '/', redirect: '/home'},
    { path: '/:pathMatch(.*)*', redirect: '/home' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log(`Navigating to ${to.path} from ${from.path}`);
    next();
});

export default router