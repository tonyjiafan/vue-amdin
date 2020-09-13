const actionTypes = {
  ADD_NUMBER: 'ADD_NUMBER', // 增加
  CUT_NUMBER: 'CUT_NUMBER', // 减少
}

const state = {
  name: 'test',
  num: 8
}

const getters = {
  name: state => state.name,
  num: state => state.num
}

const mutations = {
  ADD_NUMBER: (state, num) => {
    state.num++
  },
  CUT_NUMBER: (state, num) => {
    state.num--
  }
}

const actions = {
  add_number: ({ commit }, num) => {
    commit(actionTypes.ADD_NUMBER, num)
  },
  cut_number: ({ commit }, num) => {
    commit(actionTypes.CUT_NUMBER, num)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
