<template>
  <div class="contractQueryDiv">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">合同查询</h1>
      <!--  @tap="refreshList" -->
      <img src="../../static/image/icon-saixuan.png" alt="">
    </header>
    <div class="mui-scroll-wrapper contractQueryWrapper">
      <div class="mui-scroll">
          <ul class="mui-table-view contractList">
            <li class="mui-table-view-cell" v-for="(item,index) in listJson" :key="index">
              <a class="mui-navigate-right contractCode" @tap="toViewDetails(index)">合同编码：{{item.contractID}}</a>
              <p class="contractName">{{item.contractName}}</p>
              <div class="date-type-prize">
                <span class="contractDate">{{item.signingDate}}</span>
                <span class="contractType">{{item.typeName}}</span>
                <span class="contractPrize">{{item.totalAmount}}</span>
              </div>
            </li>
          </ul>
          <ul class="pageUl pagination">
            <!--  style="overflow: hidden;zoom:1;" -->
            <!-- <li @tap="tapPage(1)"><a>首页</a></li>
            <li v-show="pageNo != 1" @tap="tapPage(pageNo-1)"><a>上一页</a></li> -->
            <li style="display: inline-block;width: 10%;" v-for="(thisPage,index) in pageAll" :key="index" :class="{'active':pageNo == index+1}">
              <span @tap="tapPage(index)">{{thisPage}}</span>
            </li>
            <!-- <li v-show="pageAll != pageNo && pageAll != 0 " @tap="tapPage(pageNo+1)"><a>下一页</a></li>
            <li v-on:tap="tapPage(pageAll)"><a>尾页</a></li> -->
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        listJson: {},
        selected:'',
        pageNo:1,
        pageAll:0,
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        var vm = this;
        vm.axios.post('/getContracts',{
          pageNo:vm.pageNo,
          pageSize:5
        })
        .then(function(data) {
          console.log(data)
          if(data.data.result=="1"){
            vm.listJson = data.data.data.result;
            vm.pageAll = Math.ceil(data.data.data.totalSize/5)
            console.log(vm.pageAll)
            console.log(data.data.data.result.length)
          }
        })
        .catch(function(error) {
          console.log(error)
        })
      },
      toViewDetails(index){
        this.$emit("toTogglePage",["contractView",this.listJson[index]])
      },
      tapPage(index){
        // if()
        this.pageNo = index+1;
        this.init()
      }
    }
  };
</script>

<style>
#app{
  padding-top: 0px;
}
.contractQueryWrapper .mui-table-view-cell > a:not(.mui-btn){
  color: #999999;
  font-weight: normal;
}
.pagination {
  /* position: relative; */
  text-align: center;
  position: fixed;
  bottom: 200px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #f2f2f2;
}

.pagination li {
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
}

.pagination li span {
  padding: 10px 13px;
  display: inline-block;
  border: 1px solid #f3f3f3;
  background: #fff;

  color: green;
}

.pagination li span:hover {
  background: #eee;
}

.pagination li.active span {
  background: #DE333A;
  color: #fff;
  border: 1px solid #DE333A;
}
</style>
 