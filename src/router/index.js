import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public/index'

import * as Admin from '@/views/admin/index'






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
      {path: 'users/Edit/:id', name:'UserEdit', component: Admin.UserEdit },
      {path: 'users/add', name:'UserAdd', component:Admin.UserAdd },

      {path: 'cocktails/Index', name:'CocktailIdex', component: Admin.CocktailIndex },
      {path: 'cocktails/Edit', name:'CocktailEdit', component: Admin.CocktailEdit },
    ]
  },
  {
    path:'/:pathMatch(.*)*', redirect: '/'
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
