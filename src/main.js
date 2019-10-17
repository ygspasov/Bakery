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
import VueScrollReveal from "vue-scroll-reveal";

Vue.use(VueResource);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdDrawer);
Vue.use(VueCarousel);
Vue.use(MdCard);
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: "60px",
  mobile: false
});

Vue.http.options.root = "https://bakery-60a61.firebaseio.com/";

new Vue({
  el: "#app",
  render: h => h(App)
});
