import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    apiUrl: "http://localhost:8085/api/projects"
  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload;
    }
  },
  actions: {
    async getProjects({ state, commit }, type) {
      try {
        fetch(`${state.apiUrl}/${type}`)
          .then((response) => {
            return response.json();
          })
          .then((json) => commit("setProjects", json));
      } catch (error) {
        commit("setProjects", []);
      }
    }
  },
  modules: {}
});
