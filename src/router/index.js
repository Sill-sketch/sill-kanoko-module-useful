import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ThemeDefault from '@/components/theme'

export default new Router({
  routes: [
    {
      path: '/',
      component: ThemeDefault
    }
  ]
})
