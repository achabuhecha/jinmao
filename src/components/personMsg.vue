<template>
  <div>
      <div class="personMsg">
        <img src="../../static/image/touxiang.png" alt="">
        <span class="userNameSpan">{{userName}}</span>
    </div>
    <p class="changePwd" @tap="changePwd">修改密码</p>
    <p class="changePwd" @tap="exitLogin">退出登录</p>
    <p>{{tipMsg}}</p>
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
  data(){
      return{
        userName:"茶茶",
        tipMsg:""
      }
  },
  methods: {
      changePwd(){
        mui("#popover").popover('toggle', document.getElementById("div"));  
      },
      exitLogin(){
        var vm = this;
        var btnArray = ['否', '是'];
        var btnArray = ['取消', '确定'];
        mui.confirm('您确定要退出登录吗？', '', btnArray, function(e) {
            if (e.index == 1) {
                vm.$router.push('/')
            } else {
              
            }
        })
      },
      saveNewUserMsg(){
        var prePwd = $(".prePwdInput").val();
        var newPwdInput = $(".newPwdInput").val();
        var repeatNewPwdInput = $(".repeatNewPwdInput").val();
        var localStoragePwd = localStorage.getItem("password");
        if(prePwd!=localStoragePwd){
          mui.alert('原密码输入不正确！', '警告');
          return      
        }
        if(newPwdInput==""||repeatNewPwdInput==""||(newPwdInput!=repeatNewPwdInput)){
          mui.alert('新密码输入不正确，请重新输入', '警告');
          $(".newPwdInput").val('');
          $(".repeatNewPwdInput").val('');
        }else{
          var vm = this;
          vm.axios.post('/updateUserPassword',{
            username:localStorage.getItem("username"),
            newPassword:newPwdInput
          })
          .then(function(data) {
            if(data.data.result=="1"){
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


  /** 
 
  // var vm = this;        
  // mui.alert('保存成功', '提示', function() {
  //     // info.innerText = '你刚关闭了警告框';
  //     // console.log(111)
  //         // vm.tipMsg = '不允许修改密码';
      
  // });   



  // e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
  // var vm = this;
  // var btnArray = ['否', '是'];
  // var btnArray = ['取消', '确定'];
  // var htmls = ""
  // mui.prompt('请输入你对MUI的评语：', '性能好', 'Hello MUI', btnArray, function(e) {
  //     if (e.index == 1) {
  //         info.innerText = '谢谢你的评语：' + e.value;
  //     } else {
  //         info.innerText = '你点了取消按钮';
  //     }
  // })


  */
}
</script>
<style>
.personMsg{
  text-align: left;
  margin-left: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
.personMsg img{
  width: 200px;
  /* border: 1px solid red; */
  margin: 20px;
}
.userNameSpan{
  margin-left: 60px;
}
.changePwd{
  font-size: 32px;
  padding: 20px 80px;
  margin-top: 20px;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  text-align: left;
}
.changeUserMsgDiv{
  margin-top: 40px;
}
.singleDiv{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  padding: 20px 0;
}
.singleDiv span{
  width: 36%;
  /* height: 30px; */
  text-align: right;
  margin-right: 20px;
}
.singleDiv input{
  width: 54%;
  height: 48px;
  margin: 0;
  padding: 0;
}
.singleDiv button{
  width: 160px;
  height: 70px;
  font-size: 32px;
}
/*移除底部或顶部三角,需要在删除此代码*/  
.mui-popover .mui-popover-arrow:after {  
  width: 0px;  
}  
</style>
