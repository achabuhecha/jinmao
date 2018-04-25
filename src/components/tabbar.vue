<template>
  <div class="tab">
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="合同查询" class="tabbar-item">
        <i slot="icon" class="icon iconfont icon-shouye"></i>
        <img src="../../static/image/icon_chaxun.png" alt="">
        <p>合同查询</p>
      </mt-tab-item>
      <mt-tab-item id="addContract" class="tabbar-item">
        <i slot="icon" class="icon iconfont icon-leimupinleifenleileibie2"></i>
        <img src="../../static/image/icon_add.png" alt="">
      </mt-tab-item>
      <mt-tab-item id="个人信息" class="tabbar-item">
        <i slot="icon" class="icon iconfont icon-icon_account"></i>
        <img src="../../static/image/icon_geren.png" alt="">
        <p :class="selected=='个人信息'?'':'personMsg'">个人信息</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      selected:'合同查询'
    }
  },
  watch: {
          selected: function (val, oldVal) {
              // 这里就可以通过 val 的值变更来确定
              console.log(val);
              this.selected=val;
              // this.router.push("/")
              switch(val){
                case "合同查询":
                  this.$router.push("/contractList");
                  
                break;
                case "addContract":
                  this.$router.push("/contractCreate");
                break;
                case "个人信息":
                  this.$router.push("/personMsg");
                break;
              }
          }
      }
};
</script>

<style>
/* .tab .tabbar-item{
  display: inline-block;
  }
.icon {
  font-size: 25px;
}
.mint-tabbar {
  height: 8%;
}
.mint-tab-item{    
  vertical-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */
</style>
