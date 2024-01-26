import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CocktailDetailsVue from '../components/CocktailDetails.vue';
import NotFoundVue from '../components/NotFound.vue';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/Margarita'        
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => NotFoundVue
    },
    {
        path: '/:type',
        name: 'CocktailDetails',
        component: CocktailDetailsVue,
        beforeEnter: (to,from,next) => {
            if(['Margarita','Mojito','A1','Kir'].includes(String(to.params.type))){
                next()
            }else{
                next('/404')
            }
        }
    },
    {
        path: '/:catchAll(.*)*',
        redirect: '/404'
    },
]


const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router;