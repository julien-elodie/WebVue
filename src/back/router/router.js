import VueRouter from 'vue-router';

import main from './routes/main.js';
import test from './routes/test.js';

var routes = new Array();
routes.push(main);
routes.push(test);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
}); 