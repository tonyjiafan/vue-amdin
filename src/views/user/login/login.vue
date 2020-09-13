<template>
    <div class="login">
        <div class="header"></div>
        <main class="content">
            <Button type="success" size="large" @click="login()">Login</Button>
        </main>
        <div class="footer"></div>
    </div>
</template>
<script>

export default {
  created () {
    console.log(this.$route)
  },
  methods: {
    login () {
      let repuestData = {
        username: '410293095@qq.com',
        // password: '9ddbe54343efbf17b64b0b6a8b5e7befdd5f77f2',
        // code: 'yivuw1',
        token: 'SDFGHJBJHGJYGHKJ234234789234KJGHJHKJH',
        Phone: '15608052662',
        Password: '111111',
        Meeting_Id: '7a95070f-1444-c2a6-4700-08d7039a69ad'
      }
      this.$store.dispatch('app/login', repuestData)
      this.$router.push({path: '/index'})
      console.log(this.$router)
      console.log(this.$route)
    }
  }
}
</script>
<style lang="less" scoped>
.login{
    width: 100%;
    height: 100vh;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    // url('https://demos.creative-tim.com/vuetify-material-dashboard-pro/img/login.d6d3bb09.jpg');
    // background-position: center center;
    // background-size: cover;
    // background-repeat: no-repeat;
}
.content{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
