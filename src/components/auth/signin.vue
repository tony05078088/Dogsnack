<template>
  <auth
  @auth="login"
  :authWay="this.$route.path"></auth>
</template>

<script>
import auth from "./auth";
export default {
  components: {
    auth
  },
  methods: {
    login(formData) {
      this.$store.dispatch('login', { email: formData.email, password: formData.password })
    }
  },
  mounted() {
    console.log(this.$route.path);
  }
};
</script>
