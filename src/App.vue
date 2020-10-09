<template>
  <v-app id="app">
    <app-navigation></app-navigation>
    <v-main transition="slide-x-transition">
      <router-view></router-view>
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style></style>
