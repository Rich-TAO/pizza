import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

// about二级路由
import History from '@/components/about/History'
import Contact from '@/components/about/Contact'
import OrderingGuide from '@/components/about/OrderingGuide'
import Delivery from '@/components/about/Delivery'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'HomeLink',
      component: Home
    },
    {
      path: '/Menu',
      name: 'MenuLink',
      component: Menu
    },
    {
      path: '/Admin',
      name: 'AdminLink',
      component: Admin
    },
    {
      path: '/About',
      name: 'AboutLink',
      component: About,
      children:[
        {
          path:'/about/History',
          name:'HistoryLink',
          component:History
        },
        {
          path:'/about/Contact',
          name:'ContactLink',
          component:Contact
        },
        {
          path:'/about/OrderingGuide',
          name:'OrderingGuideLink',
          component:OrderingGuide
        },
        {
          path:'/about/Delivery',
          name:'DeliveryLink',
          component:Delivery
        },
      ]
    },
    {
      path: '/Login',
      name: 'LoginLink',
      component: Login
    },
    {
      path: '/Register',
      name: 'RegisterLink',
      component: Register
    }
  ]
})
