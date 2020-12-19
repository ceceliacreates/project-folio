<template>
  <v-container fill-height>
    <v-row justify="center" align-content="center" data-cy="addProjectForm">
      <v-col cols="12" md="8" lg="4" class="mx-auto text-center">
        <h1>Add a project to our list</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Project Name"
            type="text"
            v-model="projectName"
            :rules="nameRules"
            required
            data-cy="projectName"
          >
          </v-text-field>
          <v-radio-group v-model="projectType" :mandatory="true" row>
            <v-radio label="Front-End" value="front-end"></v-radio>
            <v-radio label="Back-End" value="back-end"></v-radio>
            <v-radio label="Full-Stack" value="full-stack"></v-radio>
          </v-radio-group>
          <v-combobox
            v-model="projectTags"
            :items="tags"
            label="Select/Add Project Tags"
            multiple
            chips
            :deletable-chips="true"
            :rules="tagRules"
            data-cy="projectTags"
          ></v-combobox>
          <v-text-field
            label="Project URL"
            type="url"
            v-model="projectURL"
            :rules="urlRules"
            required
            data-cy="projectUrl"
          >
          </v-text-field>
          <v-text-field
            label="Project Image URL (optional)"
            type="url"
            v-model="projectImage"
            clearable
          >
          </v-text-field>
          <v-textarea
            solo
            name="description"
            label="Project Description"
            v-model="projectDescription"
            :rules="descriptionRules"
            required
            data-cy="projectDescription"
          ></v-textarea>
        </v-form>
        <v-btn
          class="white--text"
          color="cyan"
          raised
          data-cy="submit"
          :disabled="!valid"
          @click="submit"
          >Submit</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Add",
  data() {
    return {
      valid: false,
      projectName: "",
      projectType: "",
      projectTags: [],
      projectURL: "",
      projectImage: "",
      projectDescription: "",
      projectStatus: "review",
      tags: [
        "Angular",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Material-UI",
        "Vue",
        "Node",
        "MongoDB",
        "SQL",
        "Express",
        "Svelte",
        "Java",
        "Python",
        "NoSQL"
      ],
      nameRules: [
        (v) => !!v || "Project name is required",
        (v) => v.length <= 25 || "Project name must be less than 26 characters"
      ],
      tagRules: [(v) => v.length > 0 || "At least one tag required"],
      urlRules: [
        (v) => !!v || "Project URL is required",
        (v) =>
          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
            v
          ) || "Must be a valid URL"
      ],
      descriptionRules: [
        (v) => !!v || "Project Description is required",
        (v) =>
          v.length >= 10 || "Description must be greater than 10 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const project = {
          projectName: this.projectName,
          projectType: this.projectType,
          projectTags: this.projectTags,
          projectURL: this.projectURL,
          projectImage: this.projectImage,
          projectDescription: this.projectDescription,
          projectStatus: this.projectStatus
        };

        this.$store.dispatch("addProject", project);
      }
    }
  }
};
</script>
<style scoped></style>
