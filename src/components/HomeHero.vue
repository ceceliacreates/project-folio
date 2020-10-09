<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div class="text-h1 font-weight-black cyan--text text--lighten-1 text-center">
        STAND OUT
      </div>
      <div class="text-h1 font-weight-black cyan--text text--lighten-2 text-center mb-3">
        FROM THE STACK
      </div>
      <div class="text-h5 font-weight-bold text-center">
        Project ideas to make your portfolio shine.
      </div>
      <router-link to="/#home-cta">
        <v-btn fab class="mt-5 black">
          <v-icon large color="white">expand_more</v-icon>
        </v-btn>
      </router-link>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeHero"
};
</script>

<style scoped>
.home-hero {
  background: url("http://source.unsplash.com/eZ8g_7Sh0J0");
  background-size: cover;
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
}
</style>
