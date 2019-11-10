<template>
  <form @submit="onSubmit">
    <base-alert v-if="error" type="danger">
      You must fill out each field before submitting.
    </base-alert>
    <div class="row">
      <div class="col-12">
        <base-input
          v-model="url"
          label="Page URL"
          placeholder="https://shadysite.com/"
        />
      </div>
      <div class="col-12 col-md-6">
        <base-input
          v-model="name"
          label="Animal Name"
          placeholder="Redfoot Tortoises"
        />
      </div>
      <div class="col-12 col-md-6">
        <base-input v-model="price" label="Animal Price" placeholder="450" />
      </div>
    </div>
    <base-button type="primary" @click="onSubmit">
      Submit Contribution
    </base-button>
    <span v-if="endangered" class="text-red">
      This animal is possibly endangered
    </span>
  </form>
</template>
<script>
/* eslint-disable no-console */
import { addTableRow } from "../util/api";
import { debounce } from "../util/debounce";
export default {
  data: () => ({
    url: "",
    name: "",
    price: "",
    endangered: false,
    error: false
  }),
  methods: {
    onSubmit: async function() {
      if (!this.url || !this.name || !this.price) {
        return (this.error = true);
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

      this.$store.dispatch("setSessionContribution", res.records[0]);
      this.$store.dispatch("addDashboardEntry", res.records[0]);

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
      this.endangered = false;
    }
  }
};
</script>
<style scoped>
</style>