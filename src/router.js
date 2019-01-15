import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DealerDetail from './views/DealerDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/DealerDetail/:id',
      name: 'DealerDetail',
      component: DealerDetail, 
      exact: true
    }
  ]
})
