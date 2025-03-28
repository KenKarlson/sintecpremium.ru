import Vue from "vue";
import App from "./App.vue";

import "@/assets/scss/style.scss";
import VueObserveVisibility from "vue-observe-visibility";
Vue.use(VueObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
