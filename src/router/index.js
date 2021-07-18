import { createRouter, createWebHistory } from "vue-router";

import Todos from '../components/Todos.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
    {
        path: '/',
        component: Todos
    },
    {
        path: '/:pathMatch(.*)',
        component: HelloWorld
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;