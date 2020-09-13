import { Login } from '@/api/login'
import {
  setToKen,
  removeToKen,
  removeUserName,
  setUserName,
  getUserName,
} from '@/utils/cookie'

const actionTypes = {
  SET_TOKEN: 'SET_TOKEN', // 存储TKen
  SET_USERNAME: 'SET_USERNAME', // 存储Name
  SET_ROLES: 'SET_ROLES', // 存储用户的权限
  SET_COLLAPSED: 'SET_COLLAPSED', // 存储菜单折叠状态
  SET_VERTICAL: 'SET_VERTICAL', // TopHeader状态
  SET_THEME: 'SET_THEME', // 皮肤状态
}

const state = {
  roles: [],
  to_ken: '',
  username: getUserName() || '',
  collapsed: false, 
  vertical: false, 
  theme: 'dark', 
}

const getters = {
  roles: (state) => state.roles,
  to_ken: (state) => state.to_ken,
  username: (state) => state.username,
  collapsed: (state) => state.collapsed,
  vertical: (state) => state.vertical,
  theme: (state) => state.theme,
}

const mutations = {
  SET_TOKEN(state, value) {
    state.to_ken = value
  },
  SET_USERNAME(state, value) {
    state.username = value
  },
  SET_ROLES(state, value) {
    state.roles = value
  },
  SET_COLLAPSED(state) {
    state.collapsed = !state.collapsed
  },
  SET_VERTICAL(state) {
    state.vertical = !state.vertical
  },
  SET_THEME(state, value) {
    state.theme = value
  },
}

const actions = {
  // 可以回调处理事情
  login({ commit }, repuestData) {
    console.log('action:', repuestData)

    // return new Promise((resolve, reject) => {
    //   Login(repuestData).then(response => {
    //     let data = response.data.data
    //     console.log(data)
    //     // 解构的
    //     commit('SET_TOKEN', data.token)
    //     commit('SET_USERNAME', data.username)
    //     setToKen(data.token)
    //     setUserName(data.username)
    //     resolve(response)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })

    commit(actionTypes.SET_TOKEN, repuestData.token)
    commit(actionTypes.SET_USERNAME, repuestData.username)
    setToKen(repuestData.token)
    setUserName(repuestData.username)
  },
  exit({ commit }) {
    return new Promise((resolve, reject) => {
      removeToKen()
      removeUserName()
      commit(actionTypes.SET_TOKEN, '')
      commit(actionTypes.SET_USERNAME, '')
      commit(actionTypes.SET_ROLES, [])
      resolve()
    })
  },
  setCollapsed({ commit }) {
    commit(actionTypes.SET_COLLAPSED)
  },
  setVertical({ commit }) {
    commit(actionTypes.SET_VERTICAL)
  },
  setTheme({ commit }, str) {
    console.log('str :>> ', str);
    commit(actionTypes.SET_THEME, str)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
