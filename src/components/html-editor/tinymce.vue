<template>
  <div class="tinymce-editor">
    <Editor 
      v-model="myValue"
      :id="htmlId"
      :init="init"
      :disabled="disabled"
      @onClick="onClick">
    </Editor>
  </div>
</template>
<script>

// 上传图片的接口
// import { postUploadImg } from '@/api'

import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/icons/default/icons'
import 'tinymce/themes/silver/theme'

// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/

import 'tinymce/plugins/image'// 插入上传图片插件
import 'tinymce/plugins/media'// 插入视频插件
import 'tinymce/plugins/table'// 插入表格插件
import 'tinymce/plugins/lists'// 列表插件
import 'tinymce/plugins/wordcount'// 字数统计插件

export default {
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    htmlId: {
      type: String,
      default: `html_${Date.now()}`
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: 'lists image table wordcount',
      // default: 'lists image media table wordcount',
    },
    toolbar: {
      type: [String, Array],
      default: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image table | removeformat'
    }
  },
  data () {
    const _this = this
    return {
      init: {
        language_url: '/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide',
        // skin_url: '/tinymce/skins/ui/oxide-dark',//暗色系

        // 自动获取焦点
        auto_focus: true,
        
        height: 400,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,

        // 图像对称放大缩小
        object_resizing: true,

        autoresize: true,
				autoresize_on_init: true,
				autoresize_bottom_margin: 50, 
				autoresize_min_height: _this.height || 200,
				autoresize_max_height: _this.maxHeight, // 编辑区域的最大高
        autoresize_overflow_padding: 20,

        // 设置table的样式
        table_default_styles: {
					width: '96%',
					borderCollapse: 'collapse'
        },
        
        // CONFIG: ContentStyle 这块很重要， 在最后呈现的页面也要写入这个基本样式保证前后一致， `table`和`img`的问题基本就靠这个来填坑了
				content_style: `
					*                         { padding:0; margin:0; }
					html, body                { height: auto; }
					img                       { max-width:100%; display:block;height:auto; }
					a                         { text-decoration: none; }
					iframe                    { width: 100%; }
					p                         { line-height:1.6; margin: 0px; }
					table                     { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#eeeeee; }
					.mce-object-iframe        { width:100%; box-sizing:border-box; margin:0; padding:0; }
					ul,ol                     { list-style-position:inside; }
				`,
        
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          // 直接插入base64 图像
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
          // console.log('img :>> ', img);

          // 接口上传图片
          // postUploadImg(img).then(r => {
          //   if (r.Status == 1) {
          //     // console.log(r)
              // success(r.ImgList[0])
          //     // success(img)
          //   } else {
          //     return _this.$Message.error(r.Message)
          //   }
          // })
        }
      },
      myValue: this.value
    }
  },
  watch: {
    value (newValue) {
      this.myValue = newValue
    },
    myValue (newValue) {
      this.$emit('input', newValue)
    }
  },
  mounted () {
    tinymce.init(this.init)
    console.log(this.htmlId)
  },
  methods: {
    destroyTinymce() {
      if (window.tinymce.get(this.htmlId)) {
        window.tinymce.get(this.htmlId).destroy()
        console.log('销毁富文本 :>> ');
      }
    },
    // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    // 需要什么事件可以自己增加
    onClick (e) {
      this.$emit('onClick', e, tinymce)
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear () {
      this.myValue = ''
    }
  },
  destroyed() {
		this.destroyTinymce()
	}
}

</script>