import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  email: localStorage.getItem("email") || ""
};

const mutations = {
  SET_USER(state, payload) {
    state.email = payload.email;
    localStorage.setItem("email");
  }
};

const actions = {
  login({ commit }, userData) {
    commit("SET_USER", userData);
  }
};

export default {
  state,
  mutations,
  actions
};
