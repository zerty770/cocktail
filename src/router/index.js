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
      {path: 'users/Index', name:'UserIdex', component: Admin.UserIndex },
      {path: 'users/Edit/:id(\\d+)', name:'UserEdit', component: Admin.UserEdit, props: true},
      {path: 'users/add', name:'UserAdd', component:Admin.UserAdd },

      {path: 'cocktails/Index', name:'CocktailIdex', component: Admin.CocktailIndex },
      {path: 'cocktails/Edit', name:'CocktailEdit', component: Admin.CocktailEdit },
      {path:'/:pathMatch(.*)*', redirect: '/admin/dashboard'}
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
