// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './components/request.js'
import axios from 'axios';
import './style/index.css'



Vue.config.productionTip = false;
Vue.prototype.request = request;
Vue.prototype.axios = axios;
Vue.prototype.baseUrl = "http://127.0.0.1:9090";
Vue.prototype.$Loading.config({
  color: '#19D4AE',
  height: 3
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
