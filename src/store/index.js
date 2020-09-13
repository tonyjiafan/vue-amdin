import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '@/utils/logger';
import modules from './modules';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules,
  // strict: debug, // 在开发环境中开启严格模式，所有更改必须有action发起
  plugins: debug ? [createLogger()] : []
});

// 热更新
if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept(['./modules'], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
    const newModules = require('./modules').default;
    console.log('hotUpdate', newModules);
    // 加载新模块
    store.hotUpdate({
      modules: newModules
    });
  });
}

export default store;
