<template>
  <div class="landing">
    <div class="container">
      <Login v-if="showLogin" />
      <Register v-else />
      <div class="text-center mt-4">
        <base-button @click="showLogin = !showLogin" type="primary">
          {{ showLogin ? "Register" : "Login" }} Instead
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  components: {
    Login,
    Register
  },

  data: () => ({
    showLogin: false
  })
};
</script>

<style>
</style>