<template>
  <div class="card bg-secondary shadow border-0">
    <div class="card-body px-lg-5 py-lg-5">
      <div class="text-center text-muted mb-4">
        <small>Log In</small>
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
          <base-button @click="onLogin" type="primary" class="my-4"
            >Sign in</base-button
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",

  data: () => ({
    email: "",
    password: ""
  }),

  methods: {
    onLogin() {}
  }
};
</script>
<style>
</style>
