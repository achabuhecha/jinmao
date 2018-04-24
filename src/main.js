// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'

import './assets/css/my-mint.css'//全局修改mint-UI样式

// import 'lib-flexible'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
