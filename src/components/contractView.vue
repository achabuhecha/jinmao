<template>
    <div class="contractCreateDiv">
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">合同录入</h1>
        </header>
        <div class="mui-scroll-wrapper contractCreateWrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse mui-active">
                        <a class="mui-navigate-right" href="#">
                            <img class="itemTypeImg" src="../../static/image/icon_xiangmuxinxi.png" alt="">
                            <span class="itemTypeName">项目信息</span>
                        </a>
                        <div class="mui-collapse-content">
                            <div class="singleContentDiv">
                                <span class="singleTitle">项目信息:</span>
                                <input class="singleInput" type="text" name="" v-model="childDetails.prjName">
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse mui-active">
                        <a class="mui-navigate-right" href="#">
                            <img class="itemTypeImg" src="../../static/image/icon_hetong.png" alt="">
                            <span class="itemTypeName">合同基本信息</span>
                        </a>
                        <div class="mui-collapse-content">
                            <div class="singleContentDiv">
                                <span class="singleTitle">合同编码:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.contractCode">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">合同名称:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.contractName">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">签订日期:</span>
                                <div class="form-item item-line" id="selectDate">                 
                                    <label id="showDateLabel" v-show="!asd" @tap="selTime">时间选择器</label>                 
                                    <div class="pc-box">                     
                                        <span data-year="" data-month="" data-date="" id="showDate" @tap="selTime"></span>  
                                    </div>             
                                </div>
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">合同类别:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.typeName">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">签订金额:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.totalAmount">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">合同期限:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.contractTerm">
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse mui-active">
                        <a class="mui-navigate-right" href="#">
                            <img class="itemTypeImg" src="../../static/image/icon_ckv.png" alt="">
                            <span class="itemTypeName">合同甲乙方信息</span>
                        </a>
                        <div class="mui-collapse-content">
                            <div class="singleContentDiv">
                                <span class="singleTitle">招采对接人:</span>
                                <input class="singleInput" type="text" name="" v-model="childDetails.tenderingPerson">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">成本对接人:</span>
                                <input class="singleInput" type="text" name="" v-model="childDetails.costPerson">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">合同执行人:</span>
                                <input class="singleInput" type="text" name="" v-model="childDetails.executePerson">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">承包商:</span>
                                <input class="singleInput" type="text" name="" v-model="childDetails.contractor">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">负责人:</span>
                                <input class="singleInput" type="text" name="" v-model="childDetails.contractorPerson">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">联系电话:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.contractorLinkPhone">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">项目经理:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.projectManager">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">联系电话:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.pmLinkPhone">
                            </div>
                        </div>
                    </li>
                </ul>             
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse mui-active">
                        <a class="mui-navigate-right" href="#">
                            <img class="itemTypeImg" src="../../static/image/icon_yaosu.png" alt="">
                            <span class="itemTypeName">合同要素</span>
                        </a>
                        <div class="mui-collapse-content">
                            <div class="singleContentDiv">
                                <span class="singleTitle">承包范围:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.contractorScope">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">工期:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.timeLimit">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">合同付款条件:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.paymentCondition">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">奖惩条件:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.rewardCondition">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">材料品牌要求:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.brandRequire">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">甲指乙供范围:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.supplyRange">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">项目团队:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.prjTeam">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">HSE条款:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.hse">
                            </div>
                            <div class="singleContentDivNotFirst">
                                <span class="singleTitle">其他:</span>
                                <input class="singleInput" type="text" name="" placeholder="请输入" v-model="childDetails.other">
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="mui-table-view">                    
                    <li class="mui-table-view-cell mui-collapse mui-active">
                        <a class="mui-navigate-right" href="#">
                            <img class="itemTypeImg" src="../../static/image/icon_fujian.png" alt="">
                            <span class="itemTypeName">合同附件</span>
                        </a>
                        <div class="mui-collapse-content">
                            <div id="minHeightSet" class="mui-input-row" v-show="hasUpLoadFile">
                                <input v-show="false" type="file" name="upLoadFile" id="asa" @change="upLoadFile">
                                <div>
                                    <ul>
                                        <li v-for="(file,index) in hasUpLoadFileList" :key="index">
                                            <label><img src="../../static/image/icon_yre.png" alt=""></label>
                                            <span v-show="hasUpLoadFile">{{file}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="uploadFileDiv mui-input-row singleContentDivNotFirst">
                                <label><img src="../../static/image/icon_add2.png" alt=""></label>
                                <p class="tapToUpLoadFileText" @tap="triggerUpLoadFile">点击此处上传合同附件</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse mui-active">
                        <a class="mui-navigate-right" href="#">
                            <img class="itemTypeImg" src="../../static/image/icon_yaosu.png" alt="">
                            <span class="itemTypeName">合同交底</span>
                        </a>
                        <div class="mui-collapse-content">
                            <div class="singleContentDiv">
                                <span class="singleTitle">合同交底时间:</span>
                                <input class="singleInput" type="text" name="" v-model="childDetails.contractTerm">
                            </div>
                        </div>
                        <div class="mui-collapse-content">
                            <div id="minHeightSet" class="mui-input-row" v-show="hasUpLoadFile">
                                <input v-show="false" type="file" name="upLoadFile" id="asa" @change="upLoadFile">
                                <div>
                                    <ul>
                                        <li v-for="(file,index) in hasUpLoadFileList" :key="index">
                                            <label><img src="../../static/image/icon_yre.png" alt=""></label>
                                            <span v-show="hasUpLoadFile">{{file}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="uploadFileDiv mui-input-row singleContentDivNotFirst">
                                <label><img src="../../static/image/icon_add2.png" alt=""></label>
                                <p class="tapToUpLoadFileText" @tap="triggerUpLoadFile">点击此处上传合同附件</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse mui-active">
                        <div class="mui-collapse-content">
                            <div class="singleContentDiv">
                                <button @tap="saveContract">保存</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
var selectDateDom = $('#selectDate');
var showDateDom = $('#showDate');
nowYear,nowMonth,nowDate;
showDateDom.attr('data-year', nowYear);
showDateDom.attr('data-month', nowMonth);
showDateDom.attr('data-date', nowDate);
// 数据初始化
function formatYear (nowYear) {
    var arr = [];
    for (var i = nowYear - 5; i <= nowYear + 5; i++) {
        arr.push({
            id: i + '',
            value: i + '年'
        });
    }
    return arr;
}
function formatMonth () {
    var arr = [];
    for (var i = 1; i <= 12; i++) {
        arr.push({
            id: i + '',
            value: i + '月'
        });
    }
    return arr;
}
function formatDate (count) {
    var arr = [];
    for (var i = 1; i <= count; i++) {
        arr.push({
            id: i + '',
            value: i + '日'
        });
    }
    return arr;
}
var yearData = function(callback) {
    callback(formatYear(nowYear))
}
var monthData = function (year, callback) {
    callback(formatMonth());
};
var dateData = function (year, month, callback) {
    // settimeout只是模拟异步请求，真实情况可以去掉
    // setTimeout(function() {
    if (/^(1|3|5|7|8|10|12)$/.test(month)) {
        callback(formatDate(31));
    }
    else if (/^(4|6|9|11)$/.test(month)) {
        callback(formatDate(30));
    }
    else if (/^2$/.test(month)) {
        if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
           callback(formatDate(29));
        }
        else {
            callback(formatDate(28));
        }
    }
    else {
        throw new Error('month is illegal');
    }
};
export default {
  data() {
    return {
      asd: false,
      hasUpLoadFile: false,
      textTips: "点击此处上传合同附件",
      createTime:true,
      fileName:"",
      hasUpLoadFileList:[],
      childDetailsNull:{
          contractID:"",
          prjID:"",
          prjName:"",
          contractCode:"",
          contractName:"",
          typeID:"",
          signingDate:"",
          totalAmount:"",
          contractTerm:"",
          tenderingPerson:"",
          costPerson:"",
          executePerson:"",
          contractor:"",
          contractorPerson:"",
          contractorLinkPhone:"",
          projectManager:"",
          timeLimit:"",
          paymentCondition:"",
          rewardCondition:"",
          brandRequire:"",
          supplyRange:"",
          prjTeam:"",
          hse:"",
          other:"",
          discloseDate:"",
          createDate:"",
          createUserID:"",
          createDate_str:"",
          discloseDate_str:""
      }
    };
  },
  props:['childDetails'],
  created() {
    this.init();
  },
  watch:{
        'childDetails' (val, oldVal) {
            console.log("val,oldVal")
            console.log(val,oldVal)
        },
        hasUpLoadFile(val, oldVal) {
            console.log(val, oldVal);
        }
  },
  methods: {
    init() {

    },
    triggerUpLoadFile() {
      document.getElementById("asa").tap();
    },
    upLoadFile(e) {
      var files = e.target.files;
      this.fileName=files["0"].name;
      this.hasUpLoadFile = true;
      this.hasUpLoadFileList.push(files["0"].name)
    },
    selTime(){
        var vm = this;
        var oneLevelId = showDateDom.attr('data-year');
        var twoLevelId = showDateDom.attr('data-month');
        var threeLevelId = showDateDom.attr('data-date');
        var iosSelect = new IosSelect(3, 
            [yearData, monthData, dateData],
            {
                title: '合同日期选择',
                itemHeight: 35,
                oneLevelId: oneLevelId,
                twoLevelId: twoLevelId,
                threeLevelId: threeLevelId,
                showLoading: true,
                callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
                    showDateDom.attr('data-year', selectOneObj.id);
                    showDateDom.attr('data-month', selectTwoObj.id);
                    showDateDom.attr('data-date', selectThreeObj.id);
                    // $("#showDate").html((selectOneObj.value.toString().replace("年","-") + ' ' + selectTwoObj.value.toString().replace("月","-") + ' ' + selectThreeObj.value.toString().replace("日","")));
                    $("#showDate").html((selectOneObj.value.toString() + ' ' + selectTwoObj.value.toString() + ' ' + selectThreeObj.value.toString()));
                    vm.asd=true;
                }
        });
    },
    saveContract(){
        var vm = this;
        vm.axios.post('/addContract',{
        //   prjName:childDetails.pageNo,      //项目名称
        //   contractCode:childDetails.contractCode,       //合同编码
        //   contractName:childDetails.contractName,       //合同名称
        //   totalAmount:childDetails.totalAmount      //总金额
            prjName:"prjName",
            contractCode:"AFCH123",
            contractName:"contractName",
            totalAmount:555444
        })
        .then(function(data) {
          console.log(data)
          if(data.data.result=="1"){
            mui.alert('保存成功', '提示');
            // vm.listJson = data.data.data.result;
            // vm.pageAll = Math.ceil(data.data.data.totalSize/5)
            // console.log(vm.pageAll)
            // console.log(data.data.data.result.length)
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
};
</script>
<style>
.mui-scroll {
  padding-top: 108px;
  padding-bottom: 240px; /*196*/
}
.mui-scroll-wrapper .mui-table-view {
  width: 686px;
  margin: auto;
  background: #f2f2f2;
}
.contractCreateWrapper .mui-table-view-cell > a:not(.mui-btn) {
  color: #4e8ded;
  font-weight: bold;
}
.mui-table-view-cell.mui-collapse.mui-active,
.mui-table-view li {
  margin-top: 0;
}
.mui-input-row label {
  font-size: 32px;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 15px;
  margin-left: 24px;
}
.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  padding-bottom: 5px;
}
.mui-input-row .mui-input-clear ~ .mui-icon-clear,
.mui-input-row .mui-input-password ~ .mui-icon-eye,
.mui-input-row .mui-input-speech ~ .mui-icon-speech {
  top: 36px; /*48px*/
  height: 10px;
}
.mui-input-group .mui-input-row:after {
  color: #efefef;
}
.mui-input-row label {
  width: 30%;
}
.mui-input-row {
  border-bottom: 1px solid gray;
  height: 98px;
  display: flex;
  align-items: center;
}
.mui-collapse-content .mui-input-row:nth-child(1) {
  border-top: 1px solid gray;
}
.tapToUpLoadFileText {
  color: #4e8ded;
}
.singleTitle {
  font-size: 32px;
  color: #333333;
  width: 40%;
}
.mui-table-view-cell {
  margin: 0;
}
.singleInput {
  width: 60% !important;
  margin: 0 !important;
  margin-left: 50px !important;
  border: 0 !important;
}
.singleContentDiv {
  height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0 !important;
  border-top: 1px solid #b6b5b5 !important;
  border-bottom: 1px solid #b6b5b5 !important;
  border-radius: 0 !important;
  font-size: 32px;
}
.singleContentDivNotFirst {
  height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0 !important;
  border-bottom: 1px solid #b6b5b5 !important;
  border-radius: 0 !important;
  font-size: 32px;
}
.mui-table-view-cell.mui-collapse .mui-collapse-content {
  padding: 0;
}
#selectDate{
    width: 100%;
}
#showDateLabel{
    margin-left: -60px;
    display: flex;
    align-content: flex-start;
    justify-content:center;
    color: #999999
}
#showDate{
    margin-left: -60px;
    display: flex;
    align-content: flex-start;
    justify-content:center;
}
.uploadFileDiv{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.uploadFileDiv label{
    width: 80px;
    padding:0;
}
#minHeightSet{
    height: auto;
    min-height: 90px;
}
#minHeightSet span{
    font-size: 28px;
}
#minHeightSet label{
    padding: 0;
    width: 120px;
}
#minHeightSet div ul li{
    display: flex;
    flex: 1;
    align-content: center;
    /* justify-content: center; */
}
#minHeightSet div ul li span{
    display: flex;
    align-items: center;
}
</style>
