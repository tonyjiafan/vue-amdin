/**
 * 用户管理
 */
import Layout from '@/views/layout/index'
import UserIndex from '@/views/user/user-index/index'

export const user = [
  {
    path: '/user',
    name: 'User',
    redirect: '/userIndex',
    meta: {
      title: '用户管理',
      icon: '_canyin',
      keepAlive: false,
      hidden: false,
      role: ['manager'],
    },
    component: Layout,
    children: [{
      path: '/userIndex',
      name: 'UserIndex',
      meta: {
        title: '用户列表',
        icon: '_zidingyi1',
        keepAlive: false,
        hidden: true,
        role: ['manager'],
      },
      component: UserIndex
    }]
  },
]

export const user2 = [
  {
    path: '/user2',
    name: 'User2',
    redirect: '/userIndex',
    meta: {
      title: '用户管理2222',
      icon: '_lianxiren',
      keepAlive: false,
      hidden: false,
      role: ['manager'],
    },
    component: Layout,
    children: [{
      path: '/userIndex2',
      name: 'UserIndex2',
      meta: {
        title: '用户列表2222',
        icon: '_zidingyi1',
        keepAlive: false,
        hidden: true,
        role: ['manager'],
      },
      component: UserIndex
    }]
  },
]
