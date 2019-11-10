<template>
  <div class="contribute">
    <div class="mb-3">
      Welcome back,
      <br />
      <badge type="primary">{{ $store.state.email }}</badge>
    </div>
    <card shadow>
      <Form />
    </card>
    <card class="mt-3" shadow>
      <h3 class="text-center">Your Contributions This Session</h3>
      <Entries :entries="$store.getters.sessionContributions" />
    </card>
  </div>
</template>

<script>
import Form from "@/components/Form";
import Entries from "@/components/Entries";
export default {
  components: {
    Form,
    Entries
  }
};
</script>

<style>
</style>