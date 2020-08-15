<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black cyan--text text-sm-center">
        STAND OUT
      </div>
      <div class="display-4 font-weight-black cyan--text text-sm-center mb-3">
        FROM THE STACK
      </div>
      <div class="display-1 font-weight-bold text-xs-center">
        Project ideas to make your portfolio shine.
      </div>
      <v-btn fab class="mt-5 brown darken-4">
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
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
</style>
