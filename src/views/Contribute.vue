<template>
  <div class="contribute">
    <div class="mb-3">
      Welcome back,
      <br />
      <badge type="primary">{{ $store.state.email }}</badge>
    </div>
    <card>
      <Form />
    </card>
    <Entries :entries="$store.getters.sessionContributions" />
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