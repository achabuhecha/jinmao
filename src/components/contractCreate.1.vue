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
                                <!-- <input class="singleInput" type="text" name="" v-model="childDetails.prjName"> -->
                                <input id="itemMsg" class="form-control singleInput" v-model="childDetails.prjName" v-validate="'required|orderNum'" :class="{'input': true, 'is-danger': errors.has('orderNum') }" name="orderNum" type="text" placeholder="请输入">
                                <!-- <p id="nameRulesTip">请输入纯数字</p> -->
                            </div>
                            <!-- <div v-show="errors.has('orderNum')" class="help is-danger">{{ errors.first('orderNum') }}</div> -->
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
                                <input class="singleInput" type="text" name="" @tap="showSignDate" v-model="timeSel">
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
                                <input v-show="false" type="file" name="upLoadFile" id="upLoadFileInputId" @change="upLoadFile">
                                <div>
                                    <ul>
                                        <li v-for="(file,index) in hasUpLoadFileNameList" :key="index">
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
                                <!-- <input class="singleInput" type="text" name="" v-model="childDetails.contractTerm"> -->
                                <form>
                                    <input class="singleInput" type="text" name="" @tap="showFinishDate" v-model="timeSel1">
                                </form>
                            </div>
                        </div>
                        <!-- <div class="mui-collapse-content">
                        <div id="minHeightSet" class="mui-input-row" v-show="hasUpLoadFile">
                            <input v-show="false" type="file" name="upLoadFile" id="upLoadFileInputId" @change="upLoadFile">
                            <div>
                                <ul>
                                    <li v-for="(file,index) in hasUpLoadFileNameList" :key="index">
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
                    </div> -->
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
    export default {
        data() {
            return {
                asd: false,
                hasUpLoadFile: false,
                textTips: "点击此处上传合同附件",
                createTime: true,
                fileName: "",
                hasUpLoadFileList:[],
                hasUpLoadFileNameList: [],
                timeSel: "选择签订日期",
                timeSel1: "选择签订日期",
                childDetails: {}
            };
        },
        methods: {
            triggerUpLoadFile() {
                document.getElementById("upLoadFileInputId").click();
            },
            upLoadFile(e) {
                var files = e.target.files;
                this.fileName = files["0"].name;
                this.hasUpLoadFile = true;
                this.hasUpLoadFileList.push(files["0"]);
                console.log(this.hasUpLoadFileList)
                this.hasUpLoadFileNameList.push(files["0"].name)
            },
            showSignDate() {
                var vm = this;
                var dtPicker = new mui.DtPicker({
                    "type": "date"
                });
                dtPicker.show(
                    function(selectItems) {
                        vm.timeSel = selectItems.y.value + "-" + selectItems.m.value + "-" + selectItems.d.value;
                        vm.childDetails.signingDate = selectItems.y.value + "-" + selectItems.m.value + "-" + selectItems.d.value;
                    }
                );
            },
            showFinishDate(){
                var vm = this;
                var dtPicker1 = new mui.DtPicker({
                    "type": "date"
                });
                dtPicker1.show(
                    function(selectItems) {
                        vm.timeSel1 = selectItems.y.value + "-" + selectItems.m.value + "-" + selectItems.d.value;
                        vm.childDetails.discloseDate = selectItems.y.value + "-" + selectItems.m.value + "-" + selectItems.d.value;
                        console.log(vm.childDetails)
                    }
                );                
            },
            saveContract() {
                var money = /^\d{1,16}$/;
                var tel = /^(13[0-9]|14[4|5|7]|15[0|1|2|3|5|6|7|8|9]|17[3|7|8]|18[0-9])\d{8}$/;
                // if(!money.test(this.childDetails.totalAmount)){
                //     mui.alert('签订金额请填入数字', '提示');
                //     return
                // }else if(this.childDetails.contractorLinkPhone=="" || !tel.test(this.childDetails.contractorLinkPhone)){
                //     mui.alert('请输入正确的手机号', '提示');
                //     return
                // }else if(this.childDetails.contractopmLinkPhonerLinkPhone=="" || !tel.test(this.childDetails.contractorLinkPhone)){
                //     mui.alert('请输入正确的手机号', '提示');
                //     return
                // }
                var vm = this;
                //  保存常规数据
                // vm.axios.post('/addContract', this.childDetails)
                // .then(function(data) {
                //     if(data.data.result == "1") {
                //         mui.alert('保存成功', '提示');
                //     }
                // })
                // .catch(function(error) {
                    
                // })



            // $.each(vm.hasUpLoadFileList,function(k,v){
            //     var formData = new FormData();
            //     // formData.append('plan_name', that.declareData.plan_name);
            //     formData.append('file', v);
            //     var xhr = new XMLHttpRequest();
            //     xhr.open('POST', "http://47.98.224.133:9994/api/addContract", true);

            //     // xhr.setRequestHeader("Accept", "application/json");
            //     // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            //     xhr.setRequestHeader("Content-Type","multipart/form-data");
                
            //     xhr.send(formData);
            //     // 指定通信过程中状态改变时的回调函数
            //     xhr.onreadystatechange = function () {
            //         // 通信成功时，状态值为4
            //         var completed = 4;
            //         if (xhr.readyState === completed) {
            //             if (xhr.status === 200) {
            //                 // 处理服务器发送过来的数据
            //                 var result = JSON.parse(xhr.responseText);
            //                 //这里你可以随意的处理这个result对象了
            //                 //...
            //             } else {// 处理错误
            //                 alert('连接超时');
            //             }
            //         }
            //     };
            // });


                //  保存文件
                $.each(vm.hasUpLoadFileList,function(k,v){
                    console.log(v)
                    var formData = new FormData();
                    formData.append('file', v);
                    console.log(formData)

                    let config = {
                        headers: {
                            'Content-Type': 'multipart/form-data boundary="sdfguyijniuhyuh-yghuih-kjn"'
                        }
                    }
                    // vm.axios.post('/uploadContractFile',{
                    //     file:v
                    // })

                    vm.axios.post('/uploadContractFile',{
                        file:v
                    },config)
                    .then(function(data) {
                        if(data.data.result == "1") {
                            mui.alert('保存成功', '提示');
                        }
                    })
                    .catch(function(error) {
                        
                    })
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

    #showDateLabel {
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
        min-height: 90px;
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
