<template>
  <auth @auth="Register" :authWay="this.$route.path"></auth>
</template>

<script>
import auth from "./auth";
export default {
  components: {
    auth
  },
  methods: {
    Register() {
      const formData = {
        email: this.Email,
        password: this.password,
        returnSecureToken: true
      };
      console.log(formData);
      this.$store.dispatch("signup", {
        email: formData.email,
        password: formData.password
      });
    }
  },
  created() {
    console.log(this.$route.path);
    this.$store.dispatch("fetchUser");
  }
};
</script>
