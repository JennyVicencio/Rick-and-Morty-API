import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/principal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal,
    alias: '/inicio',
    children: [
      {
        path: '/personajes',
        name: 'Personajes',
        component: () => import(/* webpackChunkName: "about" */ '../components/fichasPersonajes.vue'),
      }
    ]
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    component: () => import(/* webpackChunkName: "about" */ '../views/opiniones.vue')
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import(/* webpackChunkName: "about" */ '../views/favoritos.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin.vue')
  },
  {
    path: '/editar/:idEdit',
    name: 'editar',
    component: () => import(/* webpackChunkName: "Articulo" */ '../views/editar.vue'),
    props: true,
  },
  {
    path: '/*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "about" */ '../views/error404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
