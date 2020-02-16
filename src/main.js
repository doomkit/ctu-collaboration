import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import About from './components/pages/About.vue';
import Home from './components/pages/Home.vue';
import Statistics from './components/pages/Statistics.vue';
import Test from './components/pages/Test.vue';

require('@fortawesome/fontawesome-free/js/all.js');

// TODO: change before going to production
const environment = {
  production: false
};

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/statistics', component: Statistics },
  { path: '/test', component: Test }
];

const router = new VueRouter({ mode: 'history', routes });

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

if (environment.production) {
  Vue.config = {
    ...Vue.config,
    silent: true,
    devtools: false,
    productionTip: false
  };
}
