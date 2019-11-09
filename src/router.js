import Vue from 'vue';
import Router from 'vue-router';

import Form from '@/components/Form';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
});
