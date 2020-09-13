import router from './index'
import Progress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '../store/index'
import { getToKen, removeToKen, removeUserName } from '@/utils/cookie';

const whiteRouter = ['/login']

// 路由守卫
router.beforeEach((to, from, next) => {
  Progress.start()

  if (getToKen()) {
    if (to.path === '/login') {
      removeToKen()
      removeUserName()
      store.commit('app/SET_TOKEN', '')
      store.commit('app/SET_USERNAME', '')
      next();
      Progress.done()
    } else {
      /**
       * 获取用户的色，动态分配路由权限
       * 1、什么时候处理动态路由
       * 2、以什么条件处理
       * roles[]
       */
      if (store.getters['app/roles'].length === 0) {
        store.dispatch('route/getRoles').then((response) => {
          console.log('router', response)

          let role = response.role
          store.commit('app/SET_ROLES', role)
          // 存储角色
          store.dispatch('route/createRouter', role).then((response) => {
            let addRouters = store.getters['route/addRouters']
            let allRouters = store.getters['route/allRouters']
            // 路由更新
            router.options.routes = allRouters
            // 添加动态路由
            router.addRoutes(addRouters)
            next({ ...to, replace: true })
            // es6扩展运算符，防止内容发生变化的情况
          })
        })
        Progress.done()
      } else {
        if (!to.matched || to.matched.length === 0) {
          // 判断下，如果已经是 401 了就next()
          console.log('没有权限 :>> ', '')
          if (to.path === '/404') return next()
          next('/404')
        } else {
          next()
        }
        Progress.done()
      }
    }
    // 路由动态添加，分配菜单，每个角色分配不同的菜单
  } else {
    if (whiteRouter.indexOf(to.path) !== -1) {
      next()
    } else {
      // 路由指向
      next('/login')
    }
    Progress.done()
    /**
     * 1、直接进入index的时候，参数to被改变成了 '/index'，触发路由指向，就会跑beforeEach
     * 2、再一次 next 指向了login，再次发生路由指向，再跑beforeEach，参数的to被改变成了'/login'
     * 3、白名单判断存在，则直接执行next()，因为没有参数，所以不会再次beforeEach。
     */
  }
});
