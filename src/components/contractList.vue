<template>
  <div class="contractQueryDiv">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">合同查询</h1>
      <img src="../../static/image/icon-saixuan.png" alt="">
    </header>
    <div class="mui-scroll-wrapper contractQueryWrapper">
      <div class="mui-scroll">
          <ul class="mui-table-view contractList">
            <li class="mui-table-view-cell" v-for="(item,index) in listJson" :key="index" @tap="toViewDetails(index)">
              <a class="mui-navigate-right contractCode">合同编码：{{item.contractID}}</a>
              <p class="contractName">{{item.contractName}}</p>
              <div class="date-type-prize">
                <span class="contractDate">{{item.signingDate}}</span>
                <span class="contractType">{{item.typeName}}</span>
                <span class="contractPrize">{{item.totalAmount}}</span>
              </div>
            </li>
          </ul>
          <div id="paging">
            <span @click="switchPage(curPage - 1)">prev</span>
            <span v-if="showText(item)" @tap="switchPage(item)" v-for="item in sum" :key="item" :class="{'active': item == curPage}">{{ showText(item) }}</span>
            <span @click="switchPage(curPage + 1)">next</span>
          </div>
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
        selected: '',
        curPage: 1,
        sum: 0,
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        var vm = this;
        vm.axios.post('/getContracts', {
            pageNo: vm.curPage,
            pageSize: 5
          })
          .then(function(data) {
            if(data.data.result == "1") {
              vm.listJson = data.data.data.result;
              vm.sum = Math.ceil(data.data.data.totalSize / 5)
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      },
      toViewDetails(index) {
        this.$router.push({
          name: 'contractView',
          params: {
            contractDetails: this.listJson[index]
          }
        })
      },
      switchPage(page) {
        if(page > 0 && page < this.sum + 1) {
          this.curPage = page;
          this.init()
        }
      },
      showText(i) {
        if(i === 1 || i === this.sum) {
          //第一页和最后一页始终显示
          return i
        } else if(i < this.curPage + 2 && i > this.curPage - 2) {
          //当前页的前一页和后一页始终显示
          return i
        } else if(i == this.curPage + 2 || i == this.curPage - 2) {
          //当前页的前前页和后后页显示'...'
          return '...'
        } else {
          //其他页面都不显示
          return false
        }
      }
    }
  };
</script>

<style>
.contractQueryWrapper .mui-scroll {
	padding-top: 108px;
	padding-bottom: 320px;
}

.contractQueryWrapper .mui-table-view-cell>a:not(.mui-btn) {
	color: #999999;
	font-weight: normal;
}

#paging {
	text-align: center;
	position: fixed;
	bottom: 220px;
	padding-top: 18px;
	padding-bottom: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	background: #f2f2f2;
}

#paging::before {
	content: " ";
	position: absolute;
	height: 1px;
	right: 0;
	bottom: 84px;
	left: 0;
	background-color: #E9E9E9;
	border: 1px solid gray;
	width: 90%;
	margin: auto;
}

#paging span {
	display: inline-block;
	width: 40px;
	height: 40px;
	line-height: 40px;
	color: black;
	text-align: center;
	margin-right: 20px;
	border-radius: 40px;
	font-size: 28px;
}

#paging span.active {
	background: white;
	color: blue;
}
</style>
 