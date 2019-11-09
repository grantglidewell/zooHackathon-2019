<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.state.email) {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
</style>