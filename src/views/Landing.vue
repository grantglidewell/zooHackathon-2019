<template>
  <div class="landing">
    <div class="container">
      <div class="row mb-5 align-items-center">
        <div class="col-12 col-md-6 col-lg-8 text-center text-sm-left">
          <img
            src="/static/fauna-lens-logo.png"
            class=" mt-3 mt-sm-0 img-fluid pr-md-5 w-50 mb-4"
            alt="Fauna Lens Logo Blue Transparent"
          />
          <p class="font-lg font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolores rerum repellendus nisi natus cum magni quibusdam reiciendis
            iusto obcaecati.
          </p>
          <span class="text-primary">
            Start contributing today by registering.
          </span>
        </div>
        <div v-if="!$store.state.email" class="col-12 col-md-6 col-lg-4">
          <tabs fill class="flex-column flex-md-row">
            <card shadow>
              <tab-pane>
                <span slot="title">
                  Register
                </span>
                <p class="description">
                  <Register />
                </p>
              </tab-pane>
              <tab-pane>
                <span slot="title">
                  Login
                </span>
                <p class="description">
                  <Login />
                </p>
              </tab-pane>
            </card>
          </tabs>
        </div>
      </div>
      <div>
        <h2 class="text-center text-primary">
          Recent Entries
        </h2>
        <hr class="my-3" />
        <Entries :entries="$store.getters.entries" simple />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
import Entries from "@/components/Entries";

export default {
  components: {
    Login,
    Register,
    Entries
  },

  data: () => ({
    showLogin: false
  })
};
</script>

<style>
</style>