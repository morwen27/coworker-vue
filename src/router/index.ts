import VueRouter, { RouteConfig } from "vue-router";
import PersonList from "@/components/PersonList.vue";
import PersonPage from "@/components/PersonPage.vue";
import Component from "vue-class-component";

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
  {
    path: "*",
    name: "404",
    redirect: { name: "main" },
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
