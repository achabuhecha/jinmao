<template>
  <div>
    <div class="personMsg">
      <img src="../../static/image/touxiang.png" alt="">
      <span class="userNameSpan">{{userName}}</span>
    </div>
    <p class="changePwd" @tap="changePwd">修改密码</p>
    <p class="changePwd" @tap="exitLogin">退出登录</p>
    <div id="div" style="width: 0px;height: 0px;background: red;position: fixed;top: 70%;left: 50%;"></div>
    <div id="popover" class="mui-popover" style="height: 240px;width:320px">
      <div class="mui-popover-arrow"></div>
      <div class="changeUserMsgDiv">
        <div class="singleDiv">
          <span class="prePwd">原密码:</span>
          <input class="prePwdInput" type="password" name="" placeholder="请输入">
        </div>
        <div class="singleDiv">
          <span class="newPwd">新密码:</span>
          <input class="newPwdInput" type="password" name="" placeholder="请输入">
        </div>
        <div class="singleDiv">
          <span class="repeatNewPwd">重复新密码:</span>
          <input class="repeatNewPwdInput" type="password" name="" placeholder="请输入">
        </div>
        <div class="singleDiv">
          <button type="button" class="mui-btn" @tap="saveNewUserMsg">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        userName: "茶茶",
        timeSel: "选择时间 ..."
      }
    },
    methods: {
      show() {
        var vm = this;
        var dtPicker = new mui.DtPicker({
          "type": "date"
        });
        dtPicker.show(
          function(selectItems) {
            vm.timeSel = selectItems.y.value + "-" + selectItems.m.value + "-" + selectItems.d.value;
          }
        );
      },
      changePwd() {
        mui("#popover").popover('toggle', document.getElementById("div"));
      },
      exitLogin() {
        var vm = this;
        var btnArray = ['否', '是'];
        var btnArray = ['取消', '确定'];
        mui.confirm('您确定要退出登录吗？', '', btnArray, function(e) {
          if(e.index == 1) {
            vm.$router.push('/')
          } else {

          }
        })
      },
      saveNewUserMsg() {
        var prePwd = $(".prePwdInput").val();
        var newPwdInput = $(".newPwdInput").val();
        var repeatNewPwdInput = $(".repeatNewPwdInput").val();
        var localStoragePwd = localStorage.getItem("password");
        if(prePwd != localStoragePwd) {
          mui.alert('原密码输入不正确！', '警告');
          return
        }
        if(newPwdInput == "" || repeatNewPwdInput == "" || (newPwdInput != repeatNewPwdInput)) {
          mui.alert('新密码输入不正确，请重新输入', '警告');
          $(".newPwdInput").val('');
          $(".repeatNewPwdInput").val('');
        } else {
          var vm = this;
          vm.axios.post('/updateUserPassword', {
              username: localStorage.getItem("username"),
              newPassword: newPwdInput
            })
            .then(function(data) {
              if(data.data.result == "1") {
                mui.alert('密码修改成功', '提示');
                mui("#popover").popover('toggle', document.getElementById("div"));
              }
            })
            .catch(function(error) {
              // console.log(error)
            })
        }
      }
    }
  }
</script>
<style>

</style>
