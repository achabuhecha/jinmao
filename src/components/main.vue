<template>
  <div id="containerDiv">
    <keep-alive>
      <component v-bind:is="which_to_show0"  @toTogglePage="toTogglePageReal" :childDetails="details"></component>
    </keep-alive>
    <bottomBar @toTogglePage="toTogglePageReal"></bottomBar>
  </div>
</template>
<script>
import contractList from "@/components/contractList"
import contractCreate from "@/components/contractCreate"
import personMsg from "@/components/personMsg"
import bottomBar from "@/components/bottomBar"
export default {
  data(){
      return{
        which_to_show0:"contractList",
        details:""
      }
      
  },
  created(){
    // alert(this.$route.params.login)
    if(this.$route.params.login){
      location.reload();
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to.name)
    }
  },
  methods: {
      toTogglePageReal(param){
        // console.log(typeof param)
        if( typeof param == "object"){
          this.details = param[1];
          console.log("main.vue  --  --  this.details")
          console.log(this.details)
          this.which_to_show0 = "contractCreate";
          // var vm = this;
          // vm.axios.post('/getContracts')
          // .then(function(data) {
          //   console.log(data)
          //   if(data.data.result=="1"){
          //     vm.listJson = data.data.data.result;
          //   }
          // })
        }else{
          if(this.which_to_show0=="contractCreate"){
            this.details="a"
          }
          this.which_to_show0 = param;
        }
      }
  },
components: {
  contractList,contractCreate,personMsg,bottomBar
  }
}
</script>
<style>

</style>
