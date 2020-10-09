<template>
  <v-footer color="white" id="footer">
    <v-col class="text-center cyan--text text--lighten-2" cols="12">
     © {{ new Date().getFullYear() }} — <strong>ProjectFolio</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
</style>
