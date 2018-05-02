<template>
    <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" @tap="togglePage('contractList')">
            <img src="../../static/image/icon_chaxun.png" alt="">
            <p>合同查询</p>
        </a>
        <a class="mui-tab-item" id="addContractA" @tap="togglePage('contractCreate')">
        <img class="addContractImg" src="../../static/image/icon_add.png" alt="">
        </a>
        <a class="mui-tab-item" @tap="togglePage('personMsg')">
            <img src="../../static/image/icon_geren.png" alt="">
            <p :class="selected=='个人信息'?'':'personMsg'">个人信息</p>
        </a>
    </nav>  
</template>
<script>
    export default {
        data(){
            return{
                selected:"个人信息"
            }
        },
        methods:{
            togglePage:function(param){
                switch(param){
                    case "contractList":
                        this.$router.push("/contractList");
                        break;
                    case "contractCreate":
                        this.$router.push("/contractCreate");
                        break;
                    case "personMsg":
                        this.$router.push("/personMsg");
                        break;
                }
            }
        }
    }
</script>
<style>
    html,body{
        background: white;
    }
</style>
