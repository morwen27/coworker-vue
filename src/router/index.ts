import VueRouter, { RouteConfig } from "vue-router";
import PersonList from "@/components/PersonList.vue";
import PersonPage from "@/components/PersonPage.vue";

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "main",
    component: PersonList,
  },
  {
    path: "/person/:id",
    name: "person",
    component: PersonPage,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
