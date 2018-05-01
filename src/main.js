// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/mystyle.css'
import 'lib-flexible/flexible.js'
import '../static/js/validate'
import '../static/css/bundle.css'
import VueRouter from 'vue-router'
import Qs from 'qs'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import '../static/css/iosSelect.css'
Vue.use(VueRouter)
Vue.prototype.axios = axios
var axiosInstance = axios.create({
  baseURL: 'http://47.98.224.133:9994/api',
  transformRequest: [function (data) {
    data = Qs.stringify(data)
    return data
  }],
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
Vue.use(VueAxios, axiosInstance)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
