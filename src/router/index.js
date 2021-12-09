import Vue from 'vue'
import VueRouter from 'vue-router'
import ProcuraAnimal from '../views/ProcuraAnimal.vue'
import CadastrarAnimal from '../views/CadastrarAnimal.vue'
import ListaEspecies from '../views/ListaEspecies.vue'
import QRCode from '../views/QRCode.vue'
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
      path: '/search/species',
      name: 'Lista de Espécies',
      component: ListaEspecies,
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
