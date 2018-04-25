<template>
  <div class="loginDiv">
    <div class="logo">
      <img src="../../static/image/icon_logo.png" alt="">
    </div>
    <mt-field class="asd" label="账号" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button class="loginBtn" type="primary" @click="loginApp">登&nbsp;录</mt-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:"huangqs",
      password:'123456'
    }
  },
  methods:{
    loginApp(){
      var account = this.username;
      var pwd = this.password;
      // this.router.go(number)
      this.$router.push('/main')
      // //调用axios，校验、完成登录（可能存储账号密码）
      // var vm = this
			// vm.axios.get('../../static/json/contractList.json')
			// .then(function(e) {
			// 	// alert("success")
			// })
			// .catch(function(error) {
			// 	alert("error")
			// })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    /* margin: 0 10px; */
  }
</style>
