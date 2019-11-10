import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";

import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);
Vue.use(ArgonDashboard);
Vue.use(require("vue-moment"));

import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
