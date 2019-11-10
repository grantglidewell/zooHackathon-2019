<template>
  <div>
    <card>
      <span style="display: flex">
        <base-input v-model="url" label="url" style="flex: 3" />
        <base-input v-model="name" label="Animal Name" style="flex: 1" />
        <base-input v-model="price" label="Animal Price" style="flex: 1" />
      </span>
      <base-button @click="onSubmit">add</base-button>
      <span v-if="endangered" class="text-red">This animal is possibly endangered</span>
    </card>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { addTableRow } from "../util/api";
import { debounce } from "../util/debounce";
export default {
  data: () => ({ url: "", name: "", price: "", endangered: false }),
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
            animalPrice: this.price,
            endangered: this.endangered
          }
        }
      ]);
      if (res.error) {
        return alert("there was a problem with the submission");
      }
      this.url = "";
      this.name = "";
      this.price = "";
    },
    handleIsEndangered: debounce(({ name, list, callback }) => {
      const names = name.split(" ");
      const isEndangered = names.filter(n => {
        if (list.includes(n)) {
          return true;
        }
      });
      return callback(Boolean(isEndangered.length));
    }, 250)
  },
  watch: {
    name(value) {
      if (value.length > 3) {
        this.handleIsEndangered({
          name: value,
          list: this.$store.state.endangeredSpecies,
          callback: val => (this.endangered = val)
        });
      }
    }
  }
};
</script>
<style scoped>
</style>