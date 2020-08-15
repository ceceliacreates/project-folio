<template>
  <div>
    <home-project-types></home-project-types>
    <projects-list></projects-list>
  </div>
</template>

<script>
import HomeProjectTypes from "@/components/HomeProjectTypes";
import ProjectsList from "@/components/ProjectsList";

export default {
  name: "Projects",
  components: {
    HomeProjectTypes,
    ProjectsList
  }
};
</script>

<style scoped></style>
