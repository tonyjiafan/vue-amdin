/*
* 动态路由权限控制
* 服务端返回 路由的key和权限集合
* 在通过createRouter 来动态生成该用户所有路由
* 并将所有的路由都写入返回的权限
  meta: {
    title: '首页', 名称
    icon: '_Otherinformation', 图标
    keepAlive: false, 是否缓存
    hidden: false, 设为true后在左侧菜单不会显示该页面选项
    role: ['sale', 'manager', 'admin'], 能合法访问当前路由的权限
  }
*/ 



import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/index';
import Login from '@/views/user/login/index';

// 解决 重复点击路由报错的问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

/**
 * 默认路由
 */
export const defaultRouterMap = [
  {
    path: '/',
    name: '',
    redirect: '/login',
    meta: {
      name: '主页',
      icon: '',
      keepAlive: false,
      hidden: true,
      role: [],
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      icon: '',
      keepAlive: false,
      hidden: true,
      role: [],
    },
    component: Login
  },
  {
    path: '/notFound',
    name: 'NotFound',
    redirect: '/401',
    meta: {
      title: '401',
      icon: '',
      keepAlive: false,
      hidden: true,
      role: [],
    },
    component: Layout,
    children: [
      {
        path: '/401',
        name: 'notFound401',
        meta: {
          title: '401',
          icon: '',
          keepAlive: false,
          hidden: true,
          role: [],
        },
        component: () => import('@/components/error/401.vue')
      },
      {
        path: '/404',
        name: 'notFound404',
        meta: {
          title: '404',
          icon: '',
          keepAlive: false,
          hidden: true,
          role: [],
        },
        component: () => import('@/components/error/404.vue')
      }
    ]
  },
];

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: defaultRouterMap
});
