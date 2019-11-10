<template>
  <div class="dashboard">
    <div class="mb-3">
      Welcome back, <badge type="primary">{{ $store.state.email }}</badge>
    </div>
    <card shadow>
      <div class="d-sm-flex align-items-center text-center text-sm-left">
        <h3>Recent Entries:</h3>
        <div class="flex-grow-1"></div>
        <base-button type="primary" @click="isContribute = true">
          Contribute
        </base-button>
        <modal :show.sync="isContribute">
          <template slot="header">
            <h5 class="modal-title" id="exampleModalLabel">Contribute</h5>
          </template>
          <h2>Thank you for contributing</h2>
          <p>Please keep the following guidelines in mind while adding data</p>
          <ul>
            <li>Try to find latin animal names if possible</li>
            <li>Remember to enter the price per animal</li>
            <li>
              If an animal is possibly endangered it will be expedited to
              verification
            </li>
          </ul>
          <small>
            looking for a place to start? try
            <a href="https://www.terraristik.com/tb/list_classifieds.php"
              >terraristik</a
            >
            or
            <a href="http://www.faunaclassifieds.com/">faunaclassifieds</a>
          </small>
          <Form />
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
          <Entries :entries="$store.getters.entries" />
        </tab-pane>

        <tab-pane>
          <span slot="title">
            All
          </span>
          <Entries :entries="$store.getters.entries" />
        </tab-pane>
      </tabs>
    <card>
      <Leaderboard />
      <h3>Your recent entries:</h3>
      <Entries :entries="$store.getters.userEntries" />
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