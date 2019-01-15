import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/DealerDetail/:id',
      name: 'DealerDetail',
      component: DealerDetail, 
      exact: true
    }
  ]
})
