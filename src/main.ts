import "@/router/class-component-hooks";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "@/router/index";
import focusDirective from "@/directives/focus";
import store from "@/store";

Vue.config.productionTip = false;
Vue.directive("focus", focusDirective);

Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
