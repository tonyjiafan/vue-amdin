<template>
    <div class="iconUpload">
      <Row>
        <i-col span="2">
          <div class="demo-upload-list"  v-for="(item,index) in uploadList" :key="index">
            <template >
              <img :src="item.response">
              <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.response)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
              </div>
            </template>
          </div>
        <input type="text" style="display: none" :value="value">
        </i-col>
        <i-col span="2" v-show="uploadList.length === 0">
          <Upload
                  ref="upload"
                  :show-upload-list="false"
                  :on-success="handleSuccess"
                  :format="messageAllData.imgFileType"
                  :before-upload="handleBeforeUpload"
                  type="drag"
                  :action="api.imgManage"
                  style="display: inline-block;width:58px;">
              <div style="width: 58px;height:58px;line-height: 58px;">
                  <Icon type="ios-camera" size="20"></Icon>
              </div>
          </Upload>
        </i-col>
      </Row>
      <Modal title="浏览" v-model="visible" footer-hide>
        <img :src="imgUrl" v-if="visible" style="width: 100%">
      </Modal>
    </div>
</template>
<script>
// import api from '@/api/api'
const api = {
  // 图片上传api 必须
  imgManage: '',
}

const messageAll = {
  /**
   * @desc 图片上传提示信息
   * @position iconUpload.vue
   * */
  // 图片上传数量限制，暂无使用，以另一种方式代替
  imgMaxNumberMsg: '最多上传一张图片',
  // 图片上传大小限制
  imgLimitBytes: 20971520,
  imgFileSizeError: '图片大小不能超过' + '20M',
  // 图片上传格式限制
  imgFileType: ['jpg','jpeg','png'],
  imgFileTypeError: '只支持jpg、png、jpeg格式图片',
}

export default {
  name: "iconUpload",
  data() {
    return {
      api: api,
      messageAllData: messageAll,
      imgName: '',
      imgUrl: '',
      visible: false,
      uploadList: [],
      resultUrl: '',
    }
  },
  props: {
    // 编辑回显数据
    value: {
      type: String,
      default: ''
    },
  },
  watch: {
    value: {
      handler: function (val, oldVal) {
        if (val) {
          this.uploadList = [{
            response: val
          }]
          this.resultUrl = val
        }
      },
      immediate: true
    },
    resultUrl(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handleView(url) {
      this.imgUrl = url;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      this.$nextTick(() => {
        this.uploadList = [];
        this.resultUrl = ''
      })
    },
    handleSuccess(res, file) {
      this.$nextTick(() => {
        this.uploadList = this.$refs.upload.fileList;
        this.resultUrl = this.uploadList[0].response
      })
    },
    handleBeforeUpload(file) {
      // 文件类型校验
      let type = (file.name.substr(file.name.lastIndexOf("."))).toLowerCase(); // .jpg
      let imgType = type.split('.')[1] // jpg
      let imgFileTypeArr = messageAll.imgFileType
      let checkType = imgFileTypeArr.some((item) => {
        return item === imgType
      })
      if (!checkType) {
        this.$Message.info({
          content: messageAll.imgFileTypeError,
        });
        return false
      }
      // if (type!=".jpg"&&type!=".jpeg"&& type!=".png") {
      //   this.$Message.info({
      //     content: messageAll.imgFileTypeError,
      //   });
      //   return false;
      // }
      // 文件大小校验
      const checkMax = file.size < messageAll.imgLimitBytes;
      if (!checkMax) {
        this.$Message.info({
          content: messageAll.imgFileSizeError,
        });
        return false;
      }
      // 只能上传一张图片，暂时以另一张方式代替
      const check = this.uploadList.length < 1;
      if (!check) {
        this.$Message.info({
          content: messageAll.imgMaxNumberMsg,
        });
      }
      return check;
    }
  }
}
</script>

<style lang="less" scoped>
  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>