import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    apiUrl: "http://localhost:8085/api/projects"
  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
    async getProjects({ state, commit }, type) {
      fetch(`${state.apiUrl}/${type}`)
        .then((response) => {
          return response.json();
        })
        .then((json) => commit("setProjects", json))
        .catch(() => {
          commit("setProjects", []);
        });
    },
    userJoin({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
        });
    }
  },
  modules: {}
});
