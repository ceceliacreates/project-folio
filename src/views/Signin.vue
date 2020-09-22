<template>
  <v-container fill-height>
    <v-row justify="center" align-content="center">
      <v-col cols="12" md="8" lg="4" class="mx-auto text-center">
        <h1>Sign In to your Folio Account</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            prepend-icon="person"
            name="email"
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          >
          </v-text-field>
          <v-text-field
            prepend-icon="lock"
            name="password"
            label="Password"
            id="password"
            type="password"
            required
            v-model="password"
            :rules="passwordRules"
          >
          </v-text-field>
        </v-form>
        <v-btn color="teal" :disabled="!valid" @click="submit">Sign In</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be greater than 6 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("userLogin", {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>
<style scoped></style>
