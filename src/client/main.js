import Vue from 'vue';
import App from './app.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import store from './store';
import vuetify from './plugins/vuetify';
import io from 'socket.io-client';
export const socket = io(process.env.SERVER_HOST);

Vue.use(VueAxios, axios, Vuex);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });

new Vue(
    {
      store,
      router,
      vuetify,
      render: h => h(App),
    }
).$mount('#app')
