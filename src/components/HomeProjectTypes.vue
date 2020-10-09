<template>
  <v-container grid-list-lg id="home-project-types">
    <v-row v-if="['projects'].includes($route.name)">
      <v-col
        cols="12"
        class="text-center text-h2 font-weight-bold my-5 black--text"
        >Browse Projects</v-col
      >
    </v-row>
    <v-row v-if="['projects'].includes($route.name)">
      <v-col
        cols="12"
        class="text-center text-h6 my-5 black--text text-uppercase"
        >Choose a project type:</v-col
      >
    </v-row>
    <v-row wrap>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="https://source.unsplash.com/tZc3vjPCk-Q" height="500px">
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Front-End Projects</h3>
            </div>
          </v-card-title>
          <v-card-actions v-if="['projects'].includes($route.name)">
            <v-btn
              outlined
              block
              color="cyan lighten-1"
              @click="showProjects('front-end')"
              >SELECT</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="https://source.unsplash.com/zFYUsLk_50Y" height="500px">
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Back-End Projects</h3>
            </div>
          </v-card-title>
          <v-card-actions v-if="['projects'].includes($route.name)">
            <v-btn
              outlined
              block
              color="cyan lighten-1"
              @click="showProjects('back-end')"
              >SELECT</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-img src="https://source.unsplash.com/XmZ4GDAp9G0" height="500px">
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Full-Stack Projects</h3>
            </div>
          </v-card-title>
          <v-card-actions v-if="['projects'].includes($route.name)">
            <v-btn
              outlined
              block
              color="cyan lighten-1"
              @click="showProjects('full-stack')"
              >SELECT</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeProjectTypes",
  methods: {
    showProjects(type) {
      this.$store.dispatch("getProjects", type);
    }
  }
};
</script>

<style scoped>
</style>
