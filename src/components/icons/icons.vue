<template>
  <i :class="`iconfont icon-${type}`" :style="styles"></i>
</template>

<script>
/*
*Icons组件
在我们的项目中，可能需要的图标各式各样，iView内置的图标再多，可能都无法满足我们的需求，所以，使用Icons组件可以支持自定义图标。

使用Iconfont或者IconMoon制作字体文件。以Iconfont为例，阿里妈妈出品的图标下载和管理平台，提供免费丰富的图标，并且可以按项目管理，并打包下载。

选择Font class，并且点击下载至本地，即可下载字体文件压缩包。当然了，你也可以编辑每个图标的名字，方便你使用。下载后，文件夹内包含如下文件：
.
├── demo_fontclass.html
├── demo_symbol.html
├── demo_unicode.html
├── demo.css
├── iconfont.js


├── iconfont.css
├── iconfont.eot
├── iconfont.svg
├── iconfont.ttf
└── iconfont.woff

只需要最后这5个文件即可，看清楚哦，不需要js文件，然后把这5个文件放到iview-admin的./src/assets/icons文件夹下替换掉内置的即可。


CommonIcon组件
这个组件支持iView内置图标和自定义图标，如果是使用iView内置的图标，则使用方法和使用iView的Icon组件一样；
如果是自定义图标，则需要在名字前加上下划线_。该组件实际是对iView内置Icon组件和自定义图标组件Icons的结合，而用来区分这两者的就是type属性开头是否带有下划线。

*/ 



export default {
  name: 'Icons',
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#5c6b77'
    },
    size: {
      type: Number,
      default: 30
    }
  },
  computed: {
    styles () {
      return {
        fontSize: `${this.size}px`,
        color: this.color,
        fontWeight: 500,
        verticalAlign: '-1px',
      }
    }
  },
  mounted() {
    // console.log('object :>> ', this.type);
  }
}
</script>

<style>

</style>
