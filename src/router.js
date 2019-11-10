import Vue from 'vue';
import Router from 'vue-router';
import RequiresAuth from '@/middleware/RequiresAuth.vue';

import Form from '@/components/Form';

import Landing from '@/views/Landing.vue';
import Dashboard from '@/views/Dashboard.vue';
import Contribute from '@/views/Contribute.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: RequiresAuth,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/contribute',
      name: 'Contribute',
      component: RequiresAuth,
      children: [
        {
          path: '',
          name: 'Contribute',
          component: Contribute
        }
      ]
    },
    {
      path: '/form',
      name: 'Form',
      component: RequiresAuth,
      children: [
        {
          path: '',
          name: 'Form',
          component: Form
        }
      ]
    }
  ]
});
