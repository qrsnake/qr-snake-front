import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import LoginScreen from '../views/LoginScreen.vue'
import ProcuraAnimal from '../views/ProcuraAnimal.vue'
import QRCode from '../views/QRCode.vue'
// import CadastrarAnimal from '../views/CadastrarAnimal.vue'
Vue.use(VueRouter);

const routes = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginScreen,
    },
    {
      path: '/search',
      name: 'Procura animal',
      component: ProcuraAnimal,
    },
    {
      path: '/search/registration',
      name: 'Cadastrar Animal',
      component: () => import('@/views/CadastrarAnimal.vue'),
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
