<template>
  <div :class="[theme === 'dark' ? 'header_nav_dark' : 'header_nav_light']">
    <ul class="nav_box">
      <li @click="collapsedChange">{{ collapsed ? '展开' : '收起' }}</li>
      <li @click="go('Index')">Index</li>
      <li @click="go('Hello')">Hello</li>
      <li @click="go('UserIndex')">UserIndex</li>
      <li @click="go('Login')">Login</li>
      <li @click="go('NotFound')">NotFound</li>
      <li @click="verticalChange">{{ vertical ? '横向' : '垂直' }}</li>
      <li @click="changeTheme">{{ theme === 'dark' ? '白色' : '黑色' }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    collapsed() {
      return this.$store.getters['app/collapsed']
    },
    vertical() {
      return this.$store.getters['app/vertical']
    },
    theme() {
      return this.$store.getters['app/theme']
    }
  },
  methods: {
    collapsedChange() {
      this.$store.dispatch('app/setCollapsed')
    },
    verticalChange() {
      this.$store.dispatch('app/setVertical')
    },
    go(name) {
      this.$router.push(
        { name: name },
        onComplete => {},
        onAbort => {}
      );
    },
    changeTheme() {
      this.$store.dispatch('app/setTheme', this.theme === 'dark' ? 'light' : 'dark')
    }
  }
};
</script>
<style lang="less" scoped>
.header_nav_light {
  position: relative;
  width: 100%;
  height: 64px;
  line-height: 64px;
  background: #f5f5f5;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  .nav_box {
    height: 100%;
    list-style: none;
    li {
      float: left;
      min-width: 80px;
      height: 100%;
      color: #333333;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        background-color: #2192f3;
        border-color: #2192f3;
        color: #fff;
      }
    }
  }
}
.header_nav_dark{
  position: relative;
  width: 100%;
  height: 64px;
  line-height: 64px;
  background: #001529;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  .nav_box {
    height: 100%;
    list-style: none;
    li {
      float: left;
      min-width: 80px;
      height: 100%;
      color: #fff;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        background-color: #2192f3;
        border-color: #2192f3;
      }
    }
  }
}
</style>
