import Vue from 'vue';
import Vuex from 'vuex';
import { getTableData } from './util/api';
import endangeredSpecies from './util/endangered.json';

Vue.use(Vuex);

const state = {
  email: localStorage.getItem('email') || '',
  dashboardData: [],
  endangeredSpecies: endangeredSpecies.data
};

const mutations = {
  SET_USER(state, payload) {
    state.email = payload.email;
    localStorage.setItem('email', payload.email);
  },
  SET_DASHBOARD_DATA(state, payload) {
    state.dashboardData = payload.records;
  }
};

const actions = {
  login({ commit }, userData) {
    commit('SET_USER', userData);
  },
  async getDashboardData({ commit }) {
    const dashboardData = await getTableData();
    commit('SET_DASHBOARD_DATA', dashboardData);
  },
  logout({ commit }) {
    commit('SET_USER', { email: '' });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
