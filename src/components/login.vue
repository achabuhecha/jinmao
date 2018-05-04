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
    data() {
      return {
        username: "",
        password: ""
      }
    },
    created(){
      if(localStorage.getItem("username")){
        this.username = localStorage.getItem("username")
      }
      if(localStorage.getItem("password")){
        this.password = localStorage.getItem("password")
      }
    },
    methods: {
      loginApp() {
        var account = this.username;
        var pwd = this.password;
        var vm = this;
        vm.axios.post('/login', {
            username: account,
            password: pwd
          })
          .then(function(data) {
            if(data.data.result == "1") {
              localStorage.setItem("username", account);
              localStorage.setItem("password", pwd);
              vm.$router.push({
                name: 'main',
                params: {
                  login: true
                }
              });
            } else {
              mui.alert(data.data.message, '警告')
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      },
      refrehPage() {
        location.reload()
      }
    }
  }
</script>
<style>
  body{
    background: white;
  }
</style>
