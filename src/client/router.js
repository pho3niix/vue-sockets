import Vue from 'vue';
import Router from 'vue-router';
import notf from './components/notFound.vue';
import About from './views/About.vue';
import socket from './views/socket.vue';
import home from './views/home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/about',
            name:'about',
            component:About,
            meta:{
                title:'About'
            }
        },
        {
            path: '/NotFound',
            component: notf,
            meta: {
                title: '404 Not Found Error'
            }
        },
        {
            path: '*',
            redirect: '/NotFound'
        },
        {
            path: '/',
            component: home,
            meta: {
                title: 'Home Chat'
            }
        },
        {
            path:'/chat',
            component:socket,
            name:'chat',
            meta:{
                title:'Vue Chat'
            }
        }
    ]
});