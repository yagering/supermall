import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter) //vue3.0.0以上版本用不了Vue.use

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component: ()=> import('../views/home/Home')
  },
  {
    path:'/category',
    component: ()=> import('../views/category/Category')
  },
  {
    path:'/cart',
    component: ()=> import('../views/cart/Cart')
  },
  {
    path:'/profile',
    component: ()=> import('../views/profile/Profile')
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
