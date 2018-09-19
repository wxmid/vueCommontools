import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import DateFormate from '@/components/DateFormate/DateFormate'
import Sort from '@/components/Sort/Sort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      icon: 'el-icon-setting',
      component: Home
    },
    {
      path: '/',
      name: 'dateFormate',
      icon: 'el-icon-setting',
      component: DateFormate,
      children: [
        {
          path: '/dateFormate',
          name: 'dateFormate',
          icon: 'el-icon-setting',
          component: DateFormate
        },
        {
          path: '/sort',
          name: 'sort',
          icon: 'el-icon-setting',
          component: Sort
        }
      ]
    }
  ]
})
