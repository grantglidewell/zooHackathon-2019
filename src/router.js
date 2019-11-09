import Vue from "vue";
import Router from "vue-router";

import Form from "@/components/Form";

import Landing from "@/views/Landing.vue";
import Dashboard from "@/views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/form",
      name: "Form",
      component: Form
    }
  ]
});
