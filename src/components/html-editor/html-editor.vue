<template>
  <div style="width: 100%;margin: auto;overflow: hidden;">
    <!-- <div v-html="html"></div> -->
    <TinymceComponent
      v-model="myHtml"
      :ref="gengerateID('editor_ref')"
      :htmlId="gengerateID('html_id')"
      :disabled="disabled"
      @onClick="onClick">
    </TinymceComponent>
    <!-- <Button @click="clear">清空内容</Button>
    <Button @click="disabled = true">禁用</Button> -->
  </div>
</template>

<script>
import TinymceComponent from './tinymce'

export default {
  components: {
    TinymceComponent
  },
  props: {
    html: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      disabled: false,
      // refName: 'editor_ref',
      // htmlId: 'editor_html',
      myHtml: this.html
    }
  },
  watch: {
    html (newValue) {
      this.myHtml = newValue
    },
    myHtml (newValue) {
      this.$emit('input', newValue)
    }
  },
  mounted () {
    // this.refName = this.gengerateID('editor_ref')
    // this.html_id = this.gengerateID('html_id')
  },
  methods: {
    // 生成独立的 refName
    gengerateID (str = 'ref') {
      const _this = this
      let nonstr = `${str}_` + Math.random().toString(36).substring(3, 8)
      return nonstr
    },
    // 鼠标单击的事件
    onClick (e, editor) {
      // console.log('Element clicked')
      // console.log(e)
      // console.log(editor)
    },
    // 清空内容
    clear () {
      this.$refs[this.refName].clear()
    }
  }
}
</script>