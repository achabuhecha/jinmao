<template>
  <div class="loginDiv">
    <div class="logo">
      <img src="../../static/image/icon_logo.png" alt="">
    </div>
    <form class="mui-input-group">
      <div class="mui-input-row">
          <label>账号</label>
      <input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="mui-input-row">
          <label>密码</label>
          <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="mui-button-row">
          <button type="button" class="mui-btn" @tap="loginApp">登&nbsp;录</button>
      </div>
  </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:"yaowei",
      password:'333333'
    }
  },
  methods:{
    loginApp(){
      var account = this.username;
      var pwd = this.password;
      var vm = this;
      // vm.axios.get('../../static/json/contractList.json')
      vm.axios.post('/login',{
            username:account,
            password:pwd
				})
			.then(function(data) {
        if(data.data.result=="1"){
          localStorage.setItem("username",account);
          localStorage.setItem("password",pwd);
          vm.$router.push({ name: 'main', params: { login: true}});
          //  ,userN:vm.username,userP:vm.password
        }
			})
			.catch(function(error) {
        console.log(error)
				// alert("error")
			})
    },
    refrehPage(){
      location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    background: white;
  }
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
  .mui-input-row label{
    font-size: 32px;
    display: flex;
    justify-content: flex-start;
    padding-bottom: 15px;
    margin-left: 24px;
}
.mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{
    padding-bottom: 5px;
    font-size: 32px;
}
.mui-input-row .mui-input-clear~.mui-icon-clear, .mui-input-row .mui-input-password~.mui-icon-eye, .mui-input-row .mui-input-speech~.mui-icon-speech{
    top: 72px;
    height: 10px;
}
.mui-input-group .mui-input-row:after{
    color: #efefef;
}

.loginDiv .mui-btn{
    background: url("../../static/image/Button_Login.png") no-repeat center;
    margin: auto;
    margin-top: 146px;
    font-size: 36px;
    width: 660px;
    height: 72px;
    border-radius: 35px;
    color: white;
}
</style>
