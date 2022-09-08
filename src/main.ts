import Vue from "vue";
import App from "./App.vue";
import focusDirective from "@/directives/focus";

Vue.config.productionTip = false;
Vue.directive("focus", focusDirective);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
