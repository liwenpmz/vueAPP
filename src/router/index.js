import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Classify from '@/components/Classify/Classify'
import ShopCart from '@/components/ShopCart/ShopCart'
import My from '@/components/My/My'
import RecommendInif from '@/components/share/RecommendInif'





Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path: '/home', component: Home},
    {path: '/classify', component: Classify},
    {path: '/shopcart', component: ShopCart},
    {path: '/my', component: My},
    {path: '/recommendInif/:id', component: RecommendInif},
  ],
  linkActiveClass:"router-active"
})
