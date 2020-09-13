/**
 * Home index
 */
import Layout from '@/views/layout/index'
import Home from '@/views/home/index'

export const home = [
  {
    path: '/home',
    name: 'Home',
    redirect: 'index',
    meta: {
      title: '控制台',
      icon: '_zidingyi1',
      keepAlive: false,
      hidden: false,
      role: ['sale', 'manager', 'admin'],
    },
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'Index',
        meta: {
          title: '首页',
          icon: '_Otherinformation',
          keepAlive: false,
          hidden: false,
          role: ['sale', 'manager', 'admin'],
        },
        component: Home,
      },
    ],
  },
]
