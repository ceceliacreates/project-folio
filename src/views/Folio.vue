<template>
  <v-container fluid>
    <v-row>
      <h1>Folio</h1>
    </v-row>
     <v-row wrap>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="(userProject, idx) in userProjects"
        :key="idx"
      >
        <v-card>
          <v-img :src="userProject.image"></v-img>

          <v-card-text>
            <div class="title">{{ userProject.name }}</div>

            <div class="subheading text-uppercase cyan--text text--lighten-1">{{ userProject.type }}</div>
            <v-btn
              v-for="(tag, idx) in userProject.tags"
              :key="idx"
              small
              depressed
              text
              disabled
              class="mx-1"
              >{{ tag }}</v-btn
            >
            <div class="text-body">{{ userProject.description }}</div>
          </v-card-text>
           <v-card-actions>
            <v-btn data-cy="deleteUserProjectButton" color="red" class="mx-auto my-3" @click="deleteUserProject(userProject)" dark>Delete Project</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    name: 'Folio',
    computed: {
        userProjects() {
            return this.$store.state.userProjects;
        },
         isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
    },
    mounted() {
        this.getUserProjects();
    },
    methods: {
        getUserProjects() {
            this.$store.dispatch('getUserProjects');
        },
        deleteUserProject(project) {
             if (this.isAuthenticated) {
            this.$store.dispatch('deleteUserProject', project);
        } else {
            this.$router.push('/sign-in');
        }
        }
    }
};
</script>
<style scoped></style>
