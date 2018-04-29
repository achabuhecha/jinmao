// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/mystyle.css'
import 'lib-flexible/flexible.js'
import VueRouter from 'vue-router'
import Qs from 'qs'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import '../static/css/iosSelect.css'
Vue.use(VueRouter)
Vue.prototype.axios = axios
// axios.defaults.baseURL = 'http://101.132.67.52/'// 配置接口地址
// axios.defaults.baseURL = 'http://47.98.224.133:9994/api'// 配置接口地址

var axios_instance = axios.create({
  baseURL:'http://47.98.224.133:9994/api',
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  headers:{'Content-Type':'application/x-www-form-urlencoded'}
})
Vue.use(VueAxios, axios_instance)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
