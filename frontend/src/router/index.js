import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerOptions = [
    {
        path: '/',
        component: 'homePage'
    },
    {
        path: '/home',
        component: 'homePage'
    },
    {
        path: '/masterMode',
        component: 'masterModePage'
    }
]

const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () => import(`@/views/${route.component}.vue`)
    }
})

export default new VueRouter({
    routes
})
