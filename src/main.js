import Vue from "vue";
import App from "./App.vue";
import "@/styles/moovingo.scss";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#moovingo_app");
