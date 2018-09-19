// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
// import axios from 'axios'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUi)
// Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})