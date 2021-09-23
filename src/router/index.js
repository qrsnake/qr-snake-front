import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import LoginScreen from '../views/LoginScreen.vue'
import ProcuraAnimal from '../views/ProcuraAnimal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginScreen
  },
  {
    path: '/search',
    name: 'Procura animal',
    component: ProcuraAnimal
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
