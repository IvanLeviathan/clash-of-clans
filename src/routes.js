import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFoundPage from '@/pages/notFound'
import Item from '@/pages/itemAlias';

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item
    },
    {
      path: '/:CatchAll(.*)',
      alias: ['/:CatchAll(404)'],
      name: '404',
      component: NotFoundPage
    },

  ]
})

router.afterEach((to, from) => {
  if(to.name === '404')
    history.pushState({}, '', from.href);
});


export default router
