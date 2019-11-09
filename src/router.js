import Vue from "vue";
import Router from "vue-router";

import Landing from "@/views/Landing.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing
    }
  ]
});
