<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      disable-resize-watcher
    >
      <v-list>
        <v-list-item-group v-if="!isAuthenticated">
  <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>
              <router-link class="menu-link cyan--text text--darken-2" :to="`/${item.path}`">
                {{ item.title }}
              </router-link>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
        </v-list-item-group>
        <v-list-item-group v-else>
<v-list-item>
  <v-list-item-content>
    <v-lis-item-title @click="logout">Logout</v-lis-item-title>
  </v-list-item-content>
</v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar color="white">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/" class="menu-link">
        <v-toolbar-title class="mx-3 cyan--text text--darken-2" id="app-title">{{
          appTitle
        }}</v-toolbar-title>
      </router-link>
      <v-btn data-cy="projectsPage" class="hidden-sm-and-down mx-3" text to="/projects"
        >Projects</v-btn
      >
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn data-cy="signInPage" class="hidden-sm-and-down mx-3" color="cyan" outlined to="/sign-in"
          >SIGN IN</v-btn
        >
        <v-btn data-cy="joinPage"
          class="hidden-sm-and-down mx-3 white--text"
          color="cyan"
          raised
          to="/join"
          >JOIN</v-btn
        >
      </div>
      <v-btn data-cy="logoutButton" v-else outlined class="hidden-sm-and-down" color="grey lighten-1" @click="logout">Logout</v-btn>
    </v-app-bar>
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
  text-decoration: none;
}
</style>
