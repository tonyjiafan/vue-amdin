<template>
  <div class="errPage-container">
    <Row>
      <Col :span="12">
        <h1 class="text-jumbo text-ginormous">Not Fund!</h1>
        <h2>没有这样的页面！</h2>
        <ul class="list-unstyled">
          <li class="link-type">
            <router-link to="/index">回首页</router-link>
          </li>
        </ul>
      </Col>
      <Col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </Col>
    </Row>
  </div>
</template>

<script>
import errGif from '@/assets/images/401.gif'

export default {
  name: 'page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .errPage-container {
    width: 800px;
    margin: 100px auto;
    background: #fff;
    padding: 40px 60px;
    border-radius: 10px;
    .pan-back-btn {
      background: #008489;
      color: #fff;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
