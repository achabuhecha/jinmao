<template>
    <div class="contractCreateDiv">
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">合同详情</h1>
        </header>
        <div class="mui-scroll-wrapper contractViewWrapper">
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
                                    <label id="showDateLabel" v-show="!asd" v-html="childDetails.signingDate">时间选择器</label>
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
                            <div id="minHeightSet" class="mui-input-row">
                                <input v-show="false" type="file" name="upLoadFile" id="asa">
                                <div>
                                    <ul>
                                        <li v-for="(file,index) in hasUpLoadFileList" :key="index">
                                            <label><img src="../../static/image/icon_yre.png" alt=""></label>
                                            <span>{{file}}</span>
                                        </li>
                                    </ul>
                                </div>
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
                                <!-- <span class="singleTitle">合同交底时间:</span> -->
                                <!-- <input class="singleInput" type="text" name="" v-model="childDetails.discloseDate_str"> -->
                                <!-- <label id="showDateLabel" v-show="!asd" v-html="childDetails.discloseDate_str">时间选择器</label> -->
                                <span class="singleTitle">合同交底时间:</span>
                                <div class="form-item item-line" id="selectDate">
                                    <label id="showDateLabel1" v-html="childDetails.discloseDate_str">时间选择器</label>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mui-collapse-content">
                            <div id="minHeightSet" class="mui-input-row">
                                <input v-show="false" type="file" name="upLoadFile" id="asa">
                                <div>
                                    <ul>
                                        <li v-for="(file,index) in hasUpLoadFileList" :key="index">
                                            <label><img src="../../static/image/icon_yre.png" alt=""></label>
                                            <span>{{file}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                asd: false,
                textTips: "点击此处上传合同附件",
                createTime: true,
                fileName: "",
                hasUpLoadFileList: [],
                childDetails: {}
            }
        },
        created() {
            this.childDetails = this.$route.params.contractDetails;
            var contractCode = this.childDetails.contractCode;
            this.getFileName(contractCode);
        },
        mounted: function() {
            $("input.singleInput").attr("readonly", "readonly") //将input元素设置为readonly
        },
        watch: {
            '$route' (val, oldVal) {
                if(val.path == "/contractView") {
                    this.childDetails = val.params.contractDetails;
                    var contractCode = this.childDetails.contractCode;
                    this.getFileName(contractCode);
                }
            }
        },
        methods:{
            getFileName(contractCode){
                var vm = this;
                vm.axios.post('/getContractFileNames', {
                    contractCode:contractCode
                })
                .then(function(data) {
                    if(data.data.result == "1") {
                        vm.hasUpLoadFileList = data.data.data;
                    } else {
                        mui.alert(data.data.message, '警告')
                    };
                })
                .catch(function(error) {
                    console.log(error)
                })
            }
        }
    };
</script>
<style>
    .contractCreateDiv .mui-scroll {
        padding-top: 108px;
        padding-bottom: 280px;
    }

    .mui-scroll-wrapper .mui-table-view {
        width: 686px;
        margin: auto;
        background: #f2f2f2;
    }

    .contractCreateWrapper .mui-table-view-cell>a:not(.mui-btn) {
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

    .mui-input-row label~input,
    .mui-input-row label~select,
    .mui-input-row label~textarea {
        padding-bottom: 5px;
    }

    .mui-input-row .mui-input-clear~.mui-icon-clear,
    .mui-input-row .mui-input-password~.mui-icon-eye,
    .mui-input-row .mui-input-speech~.mui-icon-speech {
        top: 36px;
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
        width: 45%;
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

    #itemMsg {
        font-size: 34px;
        box-shadow: 0 0 0 0;
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

    #selectDate {
        width: 100%;
    }

    #showDateLabel,#showDateLabel1 {
        margin-left: -60px;
        display: flex;
        align-content: flex-start;
        justify-content: center;
        color: #999999
    }

    #showDate {
        margin-left: -60px;
        display: flex;
        align-content: flex-start;
        justify-content: center;
    }

    .uploadFileDiv {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .uploadFileDiv label {
        width: 80px;
        padding: 0;
    }

    #minHeightSet {
        height: auto;
        /* min-height: 90px; */
    }

    #minHeightSet span {
        font-size: 28px;
    }

    #minHeightSet label {
        padding: 0;
        width: 120px;
    }

    #minHeightSet div ul li {
        display: flex;
        flex: 1;
        align-content: center;
    }

    #minHeightSet div ul li span {
        display: flex;
        align-items: center;
    }

    div.help {
        font-size: 24px;
        padding: 5px;
        text-align: right;
    }
</style>
