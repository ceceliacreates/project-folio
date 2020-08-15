<template>
  <v-container grid-list-lg>
    <v-row wrap>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="(project, idx) in projects"
        :key="idx"
      >
        <v-card>
          <v-img :src="project.image"></v-img>

          <v-card-text>
            <div class="title">{{ project.name }}</div>

            <div class="subheading">Description</div>
            <div class="text-body">{{ project.description }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjectsList",
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
};
</script>
