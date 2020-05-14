import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        {
          path: '/table/base',
          component: () => import('./views/table/baseform.vue')
        },
        {
          path: '/table/height',
          component: () => import('./views/table/heighttable.vue')
        },
        {
          path: '/form/height',
          component: () => import('./views/form/height.vue')
        },
        {
          path: '/form/base',
          component: () => import('./views/form/base.vue')
        },
        {
          path: '/tab',
          component: () => import('./views/tab/index.vue')
        },
        {
          path: '/myloog',
          component: () => import('./views/dlog/mydlog.vue')
        },
        {
          path: '/upload',
          component: () => import('./views/upload/index.vue')
        },
        {
          path: '/tree',
          component: () => import('./views/tree/index.vue')
        },
        {
          path: '/news/detail',
          component: () => import('./views/news/index.vue')
        },
        {
          path: '/timeLine',
          component: () => import('./views/timeLine/index.vue')
        },
        {
          path: '/echarts',
          component: () => import('./views/echarts/index.vue')
        },
        {
          path: '/testCom',
          component: () => import('./views/testCom/index')
        },
        {
          path: '/test/test-01',
          component: () => import('./views/testCom/test/test-01')
        },
        {
          path: '/test/test-02',
          component: () => import('./views/testCom/test/test-03')
        },
        {
          path: '/test/test-03',
          component: () => import('./views/testCom/test/test-02')
        },
        {
          path: '/test-Com',
          component: () => import('./views/testCom/test/test-Com')
        },
        {
          path: '*',
          component: () => import('./views/404')
        }
      ]
    }
  ]
})
