<template>
  <div id="containerDiv">
    <router-view/>
  </div>
</template>
<script>
import contractList from "@/components/contractList"
import contractCreate from "@/components/contractCreate"
import personMsg from "@/components/personMsg"
export default {
  data(){
      return{

      }
      
  },
components: {
  contractList,contractCreate,personMsg
  }
}
</script>
<style>

</style>
