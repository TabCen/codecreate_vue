import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/pages/main/Main'
import Other from '@/pages/other/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})
