import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
require('@fortawesome/fontawesome-free/js/all.js');

import * as translation from './translation';
import About from './components/pages/About.vue';
import Home from './components/pages/Home.vue';
import Statistics from './components/pages/Statistics.vue';
import Test from './components/pages/Test.vue';

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
  { path: '/test', component: Test }
];

const router = new VueRouter({ mode: 'history', routes });
const i18n = new VueI18n(translation.options);

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
