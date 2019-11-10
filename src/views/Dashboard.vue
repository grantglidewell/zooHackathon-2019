<template>
  <div class="dashboard">
    <div class="mb-3">
      Welcome back,
      <br />
      <badge type="primary">{{ $store.state.email }}</badge>
    </div>
    <card>
      <h3>Your recent entries:</h3>
      <Entries :entries="$store.getters.userEntries" />
    </card>
  </div>
</template>

<script>
import Entries from "@/components/Entries";

export default {
  components: {
    Entries
  }
};
</script>

<style>
</style>