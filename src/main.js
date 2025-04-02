import Vue from "vue";
import App from "./App.vue";

import "@/assets/scss/style.scss";
import VueObserveVisibility from "vue-observe-visibility";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
Vue.use(VueObserveVisibility);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
