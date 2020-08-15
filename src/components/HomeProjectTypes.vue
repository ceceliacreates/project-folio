<template>
  <v-container grid-list-lg>
    <v-row>
      <v-col
        cols="12"
        class="text-center display-1 font-weight-black my-5 cyan--text"
        >Choose a Project Type</v-col
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeProjectTypes"
};
</script>

<style scoped></style>
