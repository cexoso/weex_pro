import Router from 'vue-router'
import calendar from '@/components/calendar'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: calendar
    }
  ]
})
