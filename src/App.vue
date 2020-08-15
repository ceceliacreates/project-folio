<template>
  <v-app id="app">
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
      <v-footer color="cyan darken-4">
        <v-col class="text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>ProjectFolio</strong>
        </v-col>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";

export default {
  name: "App",
  components: {
    AppNavigation
  }
};
</script>

<style></style>
