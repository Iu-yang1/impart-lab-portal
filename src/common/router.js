import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../components/Home.vue'),
        meta: {
            keepalive: true
        }
    },
    {
        path: '/status',
        name: 'status',
        component: () => import('../components/GameServerStatus.vue'),
        meta: {
            keepalive: false
        }
    },
    {
        path: '/worldMap',
        name: 'worldMap',
        component: () => import('../components/WorldMap.vue'),
        meta: {
            keepalive: true
        }
    },
    {
        path: '/guidebook',
        name: 'guidebook',
        component: () => import('../components/Guidebook.vue'),
        meta: {
            keepalive: true
        }
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    next();
});

export default router