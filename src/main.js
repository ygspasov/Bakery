import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import {
  MdButton,
  MdContent,
  MdTabs,
  MdDrawer,
  MdCard
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueCarousel from "vue-carousel";

Vue.use(VueResource);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdDrawer);
Vue.use(VueCarousel);
Vue.use(MdCard);

Vue.http.options.root = "https://bakery-60a61.firebaseio.com/";

new Vue({
  el: "#app",
  render: h => h(App)
});
