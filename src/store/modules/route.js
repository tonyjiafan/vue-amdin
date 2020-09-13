import { getUserRole } from '@/api/login';
import { defaultRouterMap } from '@/router';
import asnycRouterMap from '@/router/modules'

const actionTypes = {
  SET_ROUTER: 'SET_ROUTER', // 存储/更新路由
  SET_CURRENT_ROUTE: 'SET_CURRENT_ROUTE', // 存储更新 当前路由名称
}

// indexOf方法，判断数组中是否存在指定的某个对象，如果不存在，则返回-1
function hasPremission(roles, router) {
  if (router.meta && router.meta.role) {
    return roles.some(item => router.meta.role.indexOf(item) >= 0);
  }
}

const state = {
  currentRoute: 'Index',
  allRouters: defaultRouterMap,
  addRouters: [],
}

const getters = {
  currentRoute: (state) => state.currentRoute,
  allRouters: (state) => state.allRouters, // 所有的
  addRouters: (state) => state.addRouters, // 匹配的
}

const mutations = {
  SET_CURRENT_ROUTE(state, value) {
    state.currentRoute = value
  },
  SET_ROUTER(state, router) {
    state.addRouters = router
    state.allRouters = defaultRouterMap.concat(router)
  },
}

const actions = {
  /**
   * 更新路由名称
   * @param {*} routeName
   */
  updateRouteName({ commit }, routeName) {
    commit(actionTypes.SET_CURRENT_ROUTE, routeName)
  },
  /**
   * 获取用户角色
   * @param {*} param0
   * @param {*} repuestData
   */
  getRoles({ commit }, repuestData) {
    return new Promise((resolve, reject) => {
      // 实际接口返回的角色权限（用户权限、按钮权限）
      // getUserRole().then(response => {
      //   let data = response.data.data
      //   resolve(data)
      // })

      resolve({ role: ['admin'] })
      // resolve({ role: ['manager'] });
      // resolve({ role: ['sale', 'manager'] })
    })
  },
  /**
   * 创建动态路由
   * @param {*} data 权限
   */
  createRouter({ commit }, data) {
    console.log('STORE-role :>> ', data)
    return new Promise((resolve, reject) => {
      let role = data
      // 超管的状态
      let addRouters = []
      if (role.includes('admin')) {
        addRouters = asnycRouterMap
      } else {
        // 普通管理员
        addRouters = asnycRouterMap.filter((item) => {
          if (hasPremission(role, item)) {
            // 优先判断
            if (item.children && item.children.length > 0) {
              item.children = item.children.filter((child) => {
                if (hasPremission(role, child)) {
                  return child
                }
              })
              return item
            }
            return item
          }
        })
      }
      // 更新路由
      commit(actionTypes.SET_ROUTER, addRouters)
      resolve()
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
