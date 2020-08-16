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

            <div class="subheading text-uppercase">{{ project.type }}</div>
            <v-btn
              v-for="(tag, idx) in project.tags"
              :key="idx"
              small
              depressed
              text
              disabled
              class="mx-1"
              id="tag-button"
              >{{ tag }}</v-btn
            >
            <div class="text-body">{{ project.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="teal" class="mx-auto my-3" dark>Add to Folio</v-btn>
          </v-card-actions>
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

<style scoped>
#tag-button {
  color: teal !important;
}
</style>
