<template>
  <div class="contractQueryDiv">
      <ul v-for="(item,index) in listJson" :key="index">
          <li>
              <p class="contractCode">{{item.contractCode}}</p>
              <span class="contractName">{{item.contractName}}</span>
              <span class="contractDate">{{item.contractDate}}</span>
              <span class="contractType">{{item.contractType}}</span>
              <span class="contractPrize">{{item.contractPrize}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      listJson: {}
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      var vm = this;
      vm.axios
        .get("../../static/json/contractList.json")
        .then(function(data) {
          vm.listJson = data.data.list;
        })
        .catch(function(error) {
        //   alert("error");
        });

    /** 
      "contractCode": "0000000000000001",
      "contractName": "合同",
      "contractDate": "2018-04-25",
      "contractType": "工程合同1",
      "contractPrize": "￥100,000"
     * 
    */
    }
  }
};
</script>

<style>
.contractQueryDiv{
  font-size: 16px;
}
.contractQueryDiv ul li{
  list-style: none
}
.contractCode{
  background: #fafafa
}
</style>
 