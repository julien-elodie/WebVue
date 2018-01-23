import Vue from 'vue';
import App from '../front/pages/App.vue';
import router from './router/router.js';
import VueResource from 'vue-resource';

Vue.config.debug = true;

Vue.use(VueResource);

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
