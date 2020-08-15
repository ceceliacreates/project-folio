<template>
  <v-container fluid class="blue-grey lighten-4" id="home-details">
    <v-container grid-list-lg>
      <v-layout column>
        <v-flex
          class="display-3 font-weight-black cyan--text text--darken-3 text-sm-left my-5"
          >How It Works</v-flex
        >
        <v-flex>
          <div class="headline white--text font-weight-bold">
            <v-icon large>image_search</v-icon>
            Search for Projects
          </div>
          <p class="subheading mt-3">
            From a collection curated by the community, search for projects by
            language, framework, category, and other filters to find ideas that
            spark your interest and fit your skill level.
          </p>
        </v-flex>
        <v-flex>
          <div class="headline mt-3 white--text font-weight-bold">
            <v-icon large>dashboard</v-icon>
            Save and Share
          </div>
          <p class="subheading mt-3">
            Save the projects you want to work on to your Folio, where you can
            add notes and update the status of your selected projects. Share
            your Folio so others can see what you're working on.
          </p>
        </v-flex>
        <v-flex>
          <div class="headline mt-3 white--text font-weight-bold">
            <v-icon large>input</v-icon>
            Contribute to a Community
          </div>
          <p class="subheading mt-3">
            Vote on new projects to help the community decide which projects
            should make the cut. Know of a great project? Add it to our
            collection for voting and review.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "HomeDetails"
};
</script>

<style scoped></style>
