<template>
  <div class="layout_box">
    <!-- 左右布局 -->
    <Layout v-if="!vertical" :style="{ height: '100vh'}">
      <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
        <side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="routers">
          <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
          <div class="logo-con" :style="logStyle">
            <img style="width: 80px; height: 50px; border-radius: 4px;" v-show="!collapsed" :src="maxLogo" key="max-logo" />
            <img style="width: 40px; height: 40px; border-radius: 4px;" v-show="collapsed" :src="minLogo" key="min-logo" />
          </div>
        </side-menu>
      </Sider>
      <Layout>
        <Header class="layout-header-bar"></Header>
        <Content :style="{height: 'calc(100% - 64px)', overflowX: 'hidden', overflowY: 'scroll', padding: '0 16px 16px', backgroun: '#EEEEEE', textAlign: 'left'}">
          <div class="main_content" style="min-height: 700px">
            <Breadcrumb :style="{ margin: '16px 0' }">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>

            <!-- 子路由显示区 -->
            <keep-alive>
              <!-- 需要缓存 -->
              <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <!-- 不需要缓存 -->
            <router-view v-if="!$route.meta.keepAlive" />
          </div>
        </Content>
      </Layout>
    </Layout>

    <!-- 横向布局 -->
    <div v-else>
      <Header class="layout-header-bar"></Header>
      <Layout :style="{ height: 'calc(100vh - 64px)'}">
        <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
          <side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="routers">
            <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
            <div class="logo-con" :style="logStyle">
              <img style="width: 80px; height: 50px; border-radius: 4px;" v-show="!collapsed" :src="maxLogo" key="max-logo" />
              <img style="width: 40px; height: 40px; border-radius: 4px;" v-show="collapsed" :src="minLogo" key="min-logo" />
            </div>
          </side-menu>
        </Sider>
        <Layout>
          <Content :style="{overflowX: 'hidden', overflowY: 'scroll', padding: '0 16px 16px', backgroun: '#EEEEEE', textAlign: 'left'}">
            <div class="main_content" style="min-height: 700px">
              <Breadcrumb :style="{ margin: '16px 0' }">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Layout</BreadcrumbItem>
              </Breadcrumb>

              <!-- 子路由显示区 -->
              <keep-alive>
                <!-- 需要缓存 -->
                <router-view v-if="$route.meta.keepAlive" />
              </keep-alive>
              <!-- 不需要缓存 -->
              <router-view v-if="!$route.meta.keepAlive" />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
    
  </div>
</template>

<script>

import SideMenu from './side-menu';
import Header from './components/header/index';
// import LeftMenu from "./components/left-menu/index";
import minLogo from '@/assets/images/logo.jpg';
import maxLogo from '@/assets/images/logo2.jpg';
import './main.less';

export default {
  name: "layout",
  components: {
    SideMenu,
    Header,
    // LeftMenu
  },
  data() {
    return {
      minLogo,
      maxLogo,
      logStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '64px',
      }
    }
  },
  computed: {
    collapsed() {
      return this.$store.getters['app/collapsed']
    },
    routers() {
      return this.$store.getters['route/addRouters']
    },
    vertical() {
      return this.$store.getters['app/vertical']
    },
    theme() {
      return this.$store.getters['app/theme']
    }
  },
  mounted() {
    console.log(this.routers);
  },
  methods: {
    turnToPage (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
  }
};
</script>

<style lang="less" scoped>
.layout_box {
  height: 100vh;
  width: 100%;
}
.bg_conent {
  background: linear-gradient(#212121, rgba(0, 0, 0, 0.65));
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
}
.menus_logo {
  width: 100%;
  height: 64px;
  line-height: 64px;
  text-align: center;
  // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
}
.menus_coat {
  width: 100%;
  height: calc(~"100% - 64px");
  padding: 0;
  background: transparent;
}
.main_content {
  float: right;
  width: 100%;
  height: 100%;
  background: whitesmoke;
}
</style>
