/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import { getTableData } from "./util/api";
import endangeredSpecies from "./util/endangered.json";

Vue.use(Vuex);

const state = {
  email: localStorage.getItem("email") || "",
  dashboardData: [],
  endangeredSpecies: endangeredSpecies.data,
  sessionContributions: []
};

const getters = {
  entries(state) {
    return state.dashboardData;
  },
  userEntries(state) {
    return state.dashboardData.filter(
      entry => entry.fields.user === state.email
    );
  },
  friendEntries(state) {
    return state.dashboardData.filter(
      entry => entry.fields.user !== state.email
    );
  },
  sessionContributions(state) {
    return state.sessionContributions;
  },
  topContributors(state) {
    return Object.entries(
      state.dashboardData.reduce((acc, entry) => {
        if (acc[entry.fields.user]) {
          acc[entry.fields.user] = acc[entry.fields.user] + 1;
        } else {
          acc[entry.fields.user] = 1;
        }
        return acc;
      }, {})
    ).sort(([_user, Alength], [_busr, Blength]) =>
      Alength < Blength ? 1 : -1
    );
  }
};

const mutations = {
  SET_USER(state, payload) {
    state.email = payload.email;
    localStorage.setItem("email", payload.email);
  },
  SET_DASHBOARD_DATA(state, payload) {
    state.dashboardData = payload.records.sort((a, b) => {
      return a.fields.id > b.fields.id ? -1 : 1;
    });
  },
  ADD_DASHBOARD_DATA(state, payload) {
    state.dashboardData = [payload, ...state.dashboardData];
  },
  ADD_SESSION_CONTRIBUTION(state, payload) {
    state.sessionContributions = [payload, ...state.sessionContributions];
  }
};

const actions = {
  login({ commit }, userData) {
    commit("SET_USER", userData);
  },
  async getDashboardData({ commit }) {
    const dashboardData = await getTableData();
    commit("SET_DASHBOARD_DATA", dashboardData);
  },
  addDashboardEntry({ commit }, newEntry) {
    commit("ADD_DASHBOARD_DATA", newEntry);
  },
  logout({ commit }) {
    commit("SET_USER", { email: "" });
  },
  setSessionContribution({ commit }, payload) {
    commit("ADD_SESSION_CONTRIBUTION", payload);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
