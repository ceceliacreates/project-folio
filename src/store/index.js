import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import "firebase/firestore";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    apiUrl: "http://localhost:8085/api/projects",
    user: null,
    isAuthenticated: false
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
    getProjects({ state, commit }, type) {
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
          router.push("/folio");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/folio");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    addProject({ state }, payload) {

      const uid = state.user.user.uid;
      const projectId = payload.id;
      firebase
      .firestore()
      .collection("users").doc(uid).update({
        projects: firebase.firestore.FieldValue.arrayUnion(projectId)
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    }
  },
  getters: {
    isAuthenticated(state) {
      return (
        state.user !== null &&
        state.user !== undefined &&
        state.isAuthenticated !== false
      );
    }
  },
  modules: {}
});
