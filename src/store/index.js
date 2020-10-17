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
    isAuthenticated: false,
    userProjects: []
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
    },
    setUserProjects(state, payload) {
      state.userProjects = payload;
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
    addUserProject({ state }, payload) {

      const uid = state.user.user.uid;
      firebase
      .firestore()
      .collection("users").doc(uid).set({
        projects: firebase.firestore.FieldValue.arrayUnion(payload)
      }, {merge: true})
      .then(function(docRef) {
        console.log("Document written with ID: ", uid);
        alert("Project added");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    },
    getUserProjects({ state, commit }) {

      const uid = state.user.user.uid;

      return firebase
      .firestore()
      .collection("users").doc(uid).get().then(function(doc) {
          if (doc.exists) {
              const projects = doc.data().projects;
              commit("setUserProjects", projects)
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    },
    deleteUserProject({ state, dispatch }, payload) {

      const uid = state.user.user.uid;

      firebase
      .firestore()
      .collection("users").doc(uid).set({
        projects: firebase.firestore.FieldValue.arrayRemove(payload)
      }, {merge: true})
      .then(function(docRef) {
        console.log("Document written with ID: ", uid);
        dispatch('getUserProjects')
        
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
