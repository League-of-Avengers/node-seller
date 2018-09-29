import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import seller from '@/components/seller/index'
import goods from '@/components/goods/index'
import ratings from '@/components/ratings/index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect:'/goods'
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
