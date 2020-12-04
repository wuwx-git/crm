import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import customer from '../views/crm/customer/index'
import workbench from '../views/crm/workbench/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    { path: '/crm/workbench',
      name: 'workbench',
      component: workbench
    },
    {
      path: '/crm/customer',
      name: 'customer',
      component: customer
    },
  ]
})
