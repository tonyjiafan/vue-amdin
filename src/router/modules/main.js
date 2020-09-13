/**
 * Main
 */
import Layout from '@/views/layout/index'

export const main = [
  {
    path: '/main',
    name: 'Main',
    redirect: 'hello',
    meta: {
      title: '信息管理',
      icon: '_yule',
      keepAlive: false,
      hidden: false,
      role: ['sale', 'manager'],
    },
    component: Layout,
    children: [{
        path: '/hello',
        name: 'Hello',
        meta: {
          title: '信息列表',
          icon: '_jiudian',
          keepAlive: false,
          hidden: false,
          role: ['sale', 'manager'],
        },
        component: () => import('@/components/hello-world.vue'),
      },
      {
        path: '/work',
        name: 'Work',
        meta: {
          title: '富文本-工作',
          icon: '_zidingyi',
          keepAlive: true,
          hidden: false,
          role: ['sale'],
        },
        component: () => import('@/components/work.vue'),
      },
    ],
  }
]
