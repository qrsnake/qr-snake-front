import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
// import LoginScreen from '../views/LoginScreen.vue'
// import Home from '../views/Home.vue'
import ProcuraAnimal from '../views/ProcuraAnimal.vue'
import CadastrarAnimal from '../views/CadastrarAnimal.vue'
<<<<<<< HEAD
import QRCode from '../views/QRCode.vue'

=======

import QRCode from '../views/QRCode.vue'
// import CadastrarAnimal from '../views/CadastrarAnimal.vue'
>>>>>>> develop
Vue.use(VueRouter);

const routes = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production'
    ? '/qr-snake-front/'
    : '/',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ProcuraAnimal,
    },
    {
      path: '/search',
      name: 'Procura animal',
      component: ProcuraAnimal,
    },
    {
      path: '/search/registration',
      name: 'Cadastrar Animal',
      component: CadastrarAnimal,
    },
    {
      path: '/qrcode',
      name: 'QRCode',
      component: QRCode,
    },
  ],
});

routes.beforeEach(async (_, from, next) => {
  next();
});

export default routes;
