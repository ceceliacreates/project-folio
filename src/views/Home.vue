<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
    <home-project-types></home-project-types>
    <home-cta></home-cta>
  </span>
</template>

<script>
import HomeHero from "@/components/HomeHero";
import HomeDetails from "@/components/HomeDetails";
import HomeProjectTypes from "@/components/HomeProjectTypes";
import HomeCta from "@/components/HomeCta";

export default {
  name: "home",
  components: {
    HomeHero,
    HomeDetails,
    HomeProjectTypes,
    HomeCta
  }
};
</script>
