<template>
  <div class="contribute">
    <div class="mb-3">
      Welcome back,
      <br />
      <badge type="primary">{{ $store.state.email }}</badge>
    </div>
    <card>
      <h3>Add an entry:</h3>
      <Form />
    </card>
  </div>
</template>

<script>
import Form from "@/components/Form";

export default {
  components: {
    Form
  }
};
</script>

<style>
</style>