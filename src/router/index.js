import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public/index'

import * as Admin from '@/views/admin/index'

import Login from '@/views/auth/login'

import {authGuard} from '@/_helpers/auth-guard.js'

localStorage.setItem('token', 'marcel')


const routes = [

  {
    path:'/',
    name:'public',
    component:Public.PublicLayout,
    children:[
      { path:'/', name:'home', component: Public.Home},
      { path:'/cocktails', name:'Cocktails', component: Public.Cocktail},
      { path:'/contact', name:'Contact', component: Public.Contact}

    ]
  },  
  {
    path: '/admin',
    name: 'admin',
    component: Admin.AdminLayout,
    children:[
      {path: 'dashboard', name:'Dashboard', component: Admin.Dashboard },
      {path: 'users/Index', name:'uIdex', component: Admin.UserIndex },
      {path: 'users/Edit/:id(\\d+)', name:'uEdit', component: Admin.UserEdit, props: true},
      {path: 'users/add', name:'UserAdd', component:Admin.UserAdd },

      { path: 'cocktails/index', name: 'cList', component: Admin.CocktailIndex },
      { path: 'cocktails/edit/:id(\\d+)?', name:'cEdit', component: Admin.CocktailEdit, props: true },
      { path: '/:pathMatch(.*)*', redirect: '/admin/dashboard' }
    ]
  },
  {
    path : '/login', name: 'Login', component: Login
  },
  {
    path:'/:pathMatch(.*)*', redirect: '/'
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Vérouillage de la partie admin (token)
router.beforeEach((to,from, next) =>{
  if(to.matched[0].name == 'admin'){
    authGuard()
  }
  next()
})

export default router
