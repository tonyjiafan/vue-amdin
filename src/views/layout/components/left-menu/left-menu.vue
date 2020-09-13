<template>
  <div>
    <Menu
      theme="dark"
      :open-names="openNames"
      :active-name="activeName"
      @on-select="activeMenu"
      accordion
      :style="{ textAlign: 'left', background: 'rgba(0,0,0,0)' }"
    >
      <template v-for="(item, index) in routers">
        <Submenu :name="item.name" v-if="!item.hidden" :key="index">
          <!-- 一级菜单 -->
          <template slot="title">
            <Icon class="group_title_icon" type="md-bicycle" />
            <span class="group_title" slot="title">
              {{ item.meta.title }}
            </span>
          </template>
          <!-- 子级菜单 -->
          <template v-for="(subItem, idx) in item.children">
            <MenuItem
              :style="{ height: '45px', lineHeight: '1px' }"
              :name="subItem.name"
              v-if="!subItem.hidden"
              :key="idx"
            >
              <Icon class="child_title_icon" type="md-disc" />
              {{ subItem.meta.title }}
            </MenuItem>
          </template>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>
<script>
export default {
  name: "leftMenu",
  props: {
    routers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    activeName() {
      return this.$store.getters['route/currentRoute'];
    },
    openNames() {
      let names = this.$store.getters['route/allRouters'].map(e => e.name)
      console.log('names :>> ', names);
      return names
    }
  },
  mounted() {
    console.log(this.routers);
  },
  methods: {
    activeMenu(name) {
      console.log('name :>> ', name);
      const _this = this;
      _this.$router.push(name);
      _this.$store.dispatch('route/updateRouteName', name);
    }
  }
};
</script>
<style lang="less">
.group_title_icon {
  color: #fefefe;
  font-weight: 400;
  font-size: 16px;
}
.group_title {
  color: #fff;
  font-weight: 400;
  font-size: 14px;
}
.child_title_icon {
  font-size: 16px;
  vertical-align: -2px;
}
</style>
