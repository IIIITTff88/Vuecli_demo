import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/layout.vue'),
      children: [
        {
          path: '/home',
          name: 'myhome',
          component: () => import('./views/home/index.vue')
        },
        {
          path: '/news',
          name: 'news',
          component: () => import('./views/news/index.vue')
        },
        {
          path: '/infomation',
          name: 'infomation',
          component: () => import('./views/infomation/index.vue')
        },
        {
          path: '/myinfo',
          name: 'myinfo',
          component: () => import('./views/myinfo/index.vue')
        }
      ]
    },
    {
      path: '/edit',
      name: 'edit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/myinfo/edit.vue')
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/myinfo/test.vue')
    },
    {
      path: '/infoDetail',
      name: 'infoDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/infomation/infoDetail.vue')
    }
  ]
})

// console.log(this.router)
