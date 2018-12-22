import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
// @ts-ignore:disable-next-line
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    // NOTE: This is something you probably dont want to save here.
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
    libraries: 'geometry',
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
