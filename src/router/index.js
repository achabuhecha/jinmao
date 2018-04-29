import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import contractList from '@/components/contractList'
import contractCreate from '@/components/contractCreate'
import personMsg from '@/components/personMsg'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      redirect: { name: 'contractList' }, /* 重定向路由 */
      children: [
        {
          path: '/contractList',
          name: 'contractList',
          component: contractList
        },
        {
          path: '/contractCreate',
          name: 'contractCreate',
          component: contractCreate
        },
        {
          path: '/personMsg',
          name: 'personMsg',
          component: personMsg
        }
      ]
    }
  ]
})
