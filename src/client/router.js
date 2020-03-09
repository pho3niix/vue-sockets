import Vue from 'vue';
import Router from 'vue-router';
import notf from './components/notFound.vue';
import About from './views/About.vue';
import Hello from './components/Hello.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Hello,
            meta: {
                title: 'Home'
            }
        },
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
        }
    ]
});