import Vue from 'vue'
import Router from 'vue-router'
import Product from '../components/Product.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/Product',
      name: 'Product',
      meta: {
        title: '全部商品'
      },
      component: Product
    },
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: Home
    }
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
export default router
