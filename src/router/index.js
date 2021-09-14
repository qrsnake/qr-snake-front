import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import LoginScreen from '../views/LoginScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginScreen
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
