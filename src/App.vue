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
  }
};
</script>

<style>
</style>
