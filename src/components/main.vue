<template>
  <div id="containerDiv">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <bottomBar></bottomBar>
  </div>
</template>
<script>
  import contractList from "@/components/contractList"
  import contractCreate from "@/components/contractCreate"
  import contractView from "@/components/contractView"
  import personMsg from "@/components/personMsg"
  import bottomBar from "@/components/bottomBar"
  export default {
    data(){
        return{

        }
    },
    components: {
      contractList,contractCreate,personMsg,bottomBar,contractView
    },
    methods: {
      toTogglePageReal(param){
        //如果触发事件的是点击列表的某项，即查看合同详情，将details传递给子组件（contractView.vue），参数为某项合同的全部属性
        if( typeof param == "object"){
          
          this.details = param[1];
          this.which_to_show0 = "contractView";
        }
        else{   
          //如果不是点击的某项合同--查看其详情，则打开的是bottomBar的三个选项。其传递的参数为空对象
          this.details={}
          this.which_to_show0 = param;
        }
      }
    }
  }
</script>
<style>

</style>
