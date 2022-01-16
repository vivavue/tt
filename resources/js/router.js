import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/houses',
      name: 'Houses',
      component: () => import(/* webpackChunkName "houses" */ "./pages/Houses.vue")
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName "elhouses" */ "./pages/ElHouses.vue")
    }
  ]
})