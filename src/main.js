import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Mock from './mock' // 刚刚手写的mock.js文件
import axios from 'axios' // axios http请求库

console.log('/main.js [8]--1','Mock',Mock);
Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://localhost:8080/'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
