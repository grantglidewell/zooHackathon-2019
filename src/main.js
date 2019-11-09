import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";

import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);
Vue.use(ArgonDashboard);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,

  render: h => h(App)
}).$mount("#app");
