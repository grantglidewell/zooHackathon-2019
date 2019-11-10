<template>
  <div class="dashboard">
    <div class="mb-3">
      Welcome back, <badge type="primary">{{ $store.state.email }}</badge>
    </div>
    <card shadow class="mb-4">
      <h3>Top Contibutors</h3>
      <div class="row">
        <div class="col-12 col-md-8">
          <Leaderboard />
        </div>
      </div>
    </card>
    <card shadow>
      <div class="d-sm-flex align-items-center text-center text-sm-left">
        <h3>Recent Contributions:</h3>
        <div class="flex-grow-1"></div>
        <base-button type="primary" @click="isContribute = true">
          Contribute
        </base-button>
        <modal :show.sync="isContribute">
          <template slot="header">
            <h5 class="modal-title" id="exampleModalLabel">Contribute</h5>
          </template>
          <Form @submit="isContribute = false" />
        </modal>
      </div>
      <tabs fill class="flex-column flex-md-row">
        <tab-pane>
          <span slot="title">
            You
          </span>
          <Entries :entries="$store.getters.userEntries" />
        </tab-pane>

        <tab-pane>
          <span slot="title">
            Friends
          </span>
          <Entries :entries="$store.getters.friendEntries" />
        </tab-pane>

        <tab-pane>
          <span slot="title">
            All
          </span>
          <Entries :entries="$store.getters.entries" />
        </tab-pane>
      </tabs>
    </card>
  </div>
</template>

<script>
import Entries from "@/components/Entries";
import Form from "@/components/Form";
import Leaderboard from "@/components/Leaderboard";

export default {
  components: {
    Entries,
    Form,
    Leaderboard
  },

  data: () => ({
    isContribute: false
  })
};
</script>

<style>
.modal-body {
  padding-top: 0 !important;
}
</style>