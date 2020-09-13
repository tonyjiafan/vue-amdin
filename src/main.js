import Vue from 'vue';
import App from './App';
import VueCompositionApi from '@vue/composition-api';
import router from './router';
import store from './store';
import ViewUI from 'view-design';
import '../theme/index.less';
import '@/assets/icons/iconfont.css'
import './router/auth.js';

Vue.use(ViewUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

// runtime（运行模式）
new Vue({
  store,
  router,
  render: (h) => h(App),
  watch: {
    $route: {
      handler: function(newVal, oldVal) {
        console.log(newVal)
        this.$store.dispatch('route/updateRouteName', newVal.name)
      },
      deep: true,
    },
  },
}).$mount('#app')
