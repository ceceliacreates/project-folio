<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="cyan darken-4"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              <router-link class="menu-link" :to="`/${item.path}`">
                {{ item.title }}
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="cyan darken-4" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/" class="menu-link">
        <v-toolbar-title class="mx-3" id="app-title">{{
          appTitle
        }}</v-toolbar-title>
      </router-link>
      <v-btn data-cy="projectsPage" class="hidden-sm-and-down mx-3" to="/projects" flat
        >Projects</v-btn
      >
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn data-cy="signInPage" class="hidden-sm-and-down mx-3" to="/sign-in" flat
          >SIGN IN</v-btn
        >
        <v-btn data-cy="joinPage"
          class="hidden-sm-and-down mx-3"
          color="blue-grey lighten-3"
          to="/join"
          >JOIN</v-btn
        >
      </div>
      <v-btn data-cy="logoutButton" v-else outlined @click="logout">Logout</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Folio",
      drawer: false,
      items: [
        { title: "Projects", path: "projects" },
        { title: "Sign in", path: "sign-in" },
        { title: "Join", path: "join" }
      ]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    }
  }
};
</script>

<style scoped>
.menu-link {
  color: white;
  text-decoration: none;
}
</style>
