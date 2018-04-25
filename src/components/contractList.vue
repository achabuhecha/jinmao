<template>
  <div class="contractQueryDiv">
    <mt-header fixed title="合同查询">
      <img class="ifSelect" src="../../static/image/icon-saixuan.png" slot="right" alt="">
    </mt-header>
    <div class="mt-content">
      <ul>
          <li v-for="(item,index) in listJson" :key="index">
              <mt-cell :title="'合同编号：'+item.contractCode" to="//github.com" is-link></mt-cell>
              <p class="contractName">{{item.contractName}}</p>
              <div class="date-type-prize">
                <span class="contractDate">{{item.contractDate}}</span>
                <span class="contractType">{{item.contractType}}</span>
                <span class="contractPrize">{{item.contractPrize}}</span>
              </div>
          </li>
      </ul>
    </div> 
  </div>
</template>

<script>
import { Header, Cell,Tabbar, TabItem } from "mint-ui";

// Vue.component(Header.name, Header);
export default {
  name: "login",
  data() {
    return {
      listJson: {},
      selected:''
    };
  },
  components: {
    Header,Cell,Tabbar, TabItem
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
.contractQueryDiv {
  font-size: 16px;
}
.contractQueryDiv ul li {
  list-style: none;
}
.contractCode {
  background: #fafafa;
}
</style>
 