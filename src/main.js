import Vue from "vue";
import App from "./App.vue";
import {
  MdButton,
  MdContent,
  MdTabs,
  MdDrawer
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueCarousel from "vue-carousel";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdDrawer);
Vue.use(VueCarousel);

new Vue({
  el: "#app",
  render: h => h(App)
});
