import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

if(process.env.NODE_ENV == 'development'){
  console.log('/main.js [9]--1','development');
  require('./mock/index')
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
