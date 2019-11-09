<template>
  <div id="app">
    <navbar />
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  },

  mounted() {
    if (this.$store.state.email && this.$route.path === "/") {
      this.$router.push({ path: "/dashboard" });
    }
  },

  watch: {
    "$store.state.email"(email) {
      if (!email) {
        this.$router.push({ path: "/" });
      }
    }
  }
};
</script>

<style>
</style>
