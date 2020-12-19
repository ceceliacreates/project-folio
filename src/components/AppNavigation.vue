<template>
  <span>
    <v-navigation-drawer app v-model="drawer" disable-resize-watcher>
      <v-list>
        <v-list-item-group>
          <v-list-item key="browse">
            <v-list-item-content>
              <router-link
                class="menu-link cyan--text text--darken-2 font-weight-bold"
                to="/projects"
              >
                Browse Projects
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group v-if="!isAuthenticated">
          <template v-for="(item, index) in unAuthenticatedItems">
            <v-list-item :key="index">
              <v-list-item-content>
                <router-link
                  class="menu-link cyan--text text--darken-2"
                  :to="`/${item.path}`"
                >
                  {{ item.title }}
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
        <v-list-item-group v-else>
          <template v-for="(item, index) in authenticatedItems">
            <v-list-item :key="index">
              <v-list-item-content>
                <router-link
                  class="menu-link cyan--text text--darken-2"
                  :to="`/${item.path}`"
                >
                  {{ item.title }}
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item key="logout">
            <v-list-item-content>
              <v-btn
                data-cy="logoutButton"
                outlined
                color="black"
                @click="logout"
                >Logout</v-btn
              >
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
        <v-toolbar-title
          class="mx-3 cyan--text text--darken-2"
          id="app-title"
          >{{ appTitle }}</v-toolbar-title
        >
      </router-link>
      <v-btn
        data-cy="projectsPage"
        class="hidden-sm-and-down mx-3"
        text
        to="/projects"
        >Browse Projects</v-btn
      >
      <v-btn
        data-cy="submitProjectPage"
        class="hidden-sm-and-down mx-3"
        text
        to="/add"
        >Submit Project</v-btn
      >
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn
          data-cy="signInPage"
          class="hidden-sm-and-down mx-3"
          color="cyan"
          outlined
          to="/sign-in"
          >SIGN IN</v-btn
        >
        <v-btn
          data-cy="joinPage"
          class="hidden-sm-and-down mx-3 white--text"
          color="cyan"
          raised
          to="/join"
          >JOIN</v-btn
        >
      </div>
      <div v-else>
        <v-btn
          class="hidden-sm-and-down mx-3"
          text
          to="/folio"
          data-cy="folioButton"
          >My Folio
        </v-btn>
        <v-btn
          data-cy="logoutButton"
          outlined
          class="hidden-sm-and-down"
          color="black"
          @click="logout"
          >Logout</v-btn
        >
      </div>
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
      unAuthenticatedItems: [
        { title: "Sign in", path: "sign-in" },
        { title: "Join", path: "join" },
        { title: "Submit Project", path: "add" }
      ],
      authenticatedItems: [{ title: "My Folio", path: "folio" }]
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
