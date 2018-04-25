<template>
  <div id="containerDiv">
    <router-view/>
    <tabbar/>       
  </div>
</template>
<script>
import tabbar from "@/components/tabbar"
import contractList from "@/components/contractList"
import contractCreate from "@/components/contractCreate"
import personMsg from "@/components/personMsg"
export default {
  data(){
      return{

      }
      
  },
components: {
    tabbar,contractList,contractCreate,personMsg
  }
}
</script>
<style>

</style>
