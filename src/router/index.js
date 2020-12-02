import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import customer from '../views/customer/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/crm/customer',
      name: 'customer',
      component: customer
    },
  ]
})
