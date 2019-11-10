<template>
  <div class="contribute">
    <div class="mb-3">
      Welcome back,
      <br />
      <badge type="primary">{{ $store.state.email }}</badge>
    </div>
    <card>
      <h2>Thank you for contributing</h2>
      <p>Please keep the following guidelines in mind while adding data</p>
      <ul>
        <li>Try to find latin animal names if possible</li>
        <li>Remember to enter the price per animal</li>
        <li>If an animal is possibly endangered it will be expedited to verification</li>
      </ul>
    </card>
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