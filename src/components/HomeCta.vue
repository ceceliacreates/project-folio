<template>
  <v-container fluid id="home-cta">
    <v-row align="center">
      <div class="text-center mx-auto pa-16">
        <router-link to="/join">
          <v-btn x-large color="cyan lighten-1" class="white--text">CREATE YOUR FOLIO</v-btn>
        </router-link>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeCta"
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
