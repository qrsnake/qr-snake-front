import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';
import VueAxios from 'vue-axios'
import router from './router';
import './registerServiceWorker'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');

Vue.use(VueAxios, axios)