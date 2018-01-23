import VueRouter from 'vue-router';

import main from './routes/main.js';
import page from './routes/page.js';

var routes = new Array();
routes.push(main);
routes.push(page);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
}); 