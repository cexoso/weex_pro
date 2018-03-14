import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: index
    }
  ]
})
