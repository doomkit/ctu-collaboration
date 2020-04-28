import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
require('@fortawesome/fontawesome-free/js/all.js');
require('chartjs-chart-radial-gauge');

import * as translation from './translation';

import App from './app/app';

import About from './app/about/about';
import Home from './app/home/home.vue';
import Statistics from './app/statistics/statistics.vue';
import Test from './app/test/test.vue';
import Results from './app/results/results.vue';
import NotFound from './app/not-found/not-found';
import Title from './shared/title';

Vue.use(VueRouter);
Vue.use(VueI18n);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/statistics', component: Statistics },
  { path: '/test', component: Test },
  { path: '/results/:id', component: Results },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      });
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
const i18n = new VueI18n(translation.options);

Vue.component('vue-title', Title);

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app');

if (process.env.NODE_ENV === 'production') {
  Vue.config = {
    ...Vue.config,
    silent: true,
    devtools: false,
    productionTip: false
  };
}
