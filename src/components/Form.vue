<template>
  <div>
    <card>
      <span style="display: flex">
        <base-input v-model="url" label="url" style="flex: 3" />
        <base-input v-model="name" label="Animal Name" style="flex: 1" />
        <base-input v-model="price" label="Animal Price" style="flex: 1" />
      </span>
      <base-button @click="onSubmit">add</base-button>
    </card>
  </div>
</template>
<script>
import { addTableRow } from "../util/api";
export default {
  data: () => ({ url: "", name: "", price: "" }),
  methods: {
    onSubmit: async function() {
      if (!this.url || !this.name || !this.price) {
        return alert("you must fill in all fields");
      }
      const res = await addTableRow([
        {
          fields: {
            user: this.$store.state.email,
            url: this.url,
            animalName: this.name,
            animalPrice: this.price
          }
        }
      ]);
      if (res.error) {
        return alert("there was a problem with the submission");
      }
      this.url = "";
      this.name = "";
      this.price = "";
    }
  }
};
</script>
<style scoped>
</style>