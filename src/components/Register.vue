<template>
  <div class="card bg-secondary shadow border-0">
    <div class="card-body p-2">
      <div class="text-center text-muted mb-4">
        <small>Register</small>
      </div>
      <form role="form">
        <base-input
          class="input-group-alternative mb-3"
          placeholder="Email"
          addon-left-icon="ni ni-email-83"
          v-model="email"
        >
        </base-input>

        <base-input
          class="input-group-alternative"
          placeholder="Password"
          type="password"
          addon-left-icon="ni ni-lock-circle-open"
          v-model="password"
        >
        </base-input>

        <div class="text-center">
          <base-button @click="onRegister" type="primary" class="my-4">
            Create account
          </base-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */

export default {
  name: "register",

  data: () => ({
    email: "",
    password: ""
  }),

  methods: {
    onRegister() {
      if (!this.email) {
        alert("You must enter an email");
      }
      this.$store.dispatch("login", { email: this.email });
    }
  }
};
</script>
<style>
</style>
