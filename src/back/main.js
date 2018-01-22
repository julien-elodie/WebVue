import Vue from 'vue';
import App from '../front/App.vue';
import router from './router/router.js';
import VueResource from 'vue-resource';

Vue.config.debug = true;

import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueResource);

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
