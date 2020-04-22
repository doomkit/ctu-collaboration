import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
require('@fortawesome/fontawesome-free/js/all.js');
require('chartjs-chart-radial-gauge');

import * as translation from './translation';

import About from './components/pages/About.vue';
import Home from './components/pages/Home.vue';
import Statistics from './components/pages/Statistics.vue';
import Test from './components/pages/Test.vue';
import Results from './components/pages/Results.vue';
import NotFound from './components/pages/NotFound.vue';

Vue.use(VueRouter);
Vue.use(VueI18n);

// TODO: change before going to production
const environment = {
  production: false
};

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

import Title from './components/shared/Title.vue';
Vue.component('vue-title', Title);

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app');
Vue.config.productionTip = false;

if (environment.production) {
  Vue.config = {
    ...Vue.config,
    silent: true,
    devtools: false,
    productionTip: false
  };
}
