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
                                    <label id="showDateLabel" v-show="!asd" v-html="childDetails.discloseDate_str">时间选择器</label>
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
                                <input v-show="false" type="file" name="upLoadFile" id="asa">
                                <div>
                                    <ul>
                                        <li v-for="(file,index) in hasUpLoadFileList" :key="index">
                                            <label><img src="../../static/image/icon_yre.png" alt=""></label>
                                            <span v-show="hasUpLoadFile">{{file}}</span>
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
                                <span class="singleTitle">合同交底时间:</span>
                                <input class="singleInput" type="text" name="" v-model="childDetails.contractTerm">
                            </div>
                        </div>
                        <div class="mui-collapse-content">
                            <div id="minHeightSet" class="mui-input-row" v-show="hasUpLoadFile">
                                <input v-show="false" type="file" name="upLoadFile" id="asa">
                                <div>
                                    <ul>
                                        <li v-for="(file,index) in hasUpLoadFileList" :key="index">
                                            <label><img src="../../static/image/icon_yre.png" alt=""></label>
                                            <span v-show="hasUpLoadFile">{{file}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                hasUpLoadFile: false,
                textTips: "点击此处上传合同附件",
                createTime: true,
                fileName: "",
                hasUpLoadFileList: [],
                childDetails: {}
            }
        },
        created() {
            this.childDetails = this.$route.params.contractDetails
        },
        mounted: function() {
            $("input.singleInput").attr("readonly", "readonly") //将input元素设置为readonly
        },
        watch: {
            '$route' (val, oldVal) {
                if(val.path == "/contractView") {
                    this.childDetails = val.params.contractDetails;
                }
            }
        }
    };
</script>
<style>

</style>
