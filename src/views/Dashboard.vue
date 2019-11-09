<template>
  <div class="dashboard">
    This is your dashboard, dear {{ this.$store.state.email }}
    <card>
      <h3>Your recent entries:</h3>

      <ul>
        <li v-bind:key="item.fields.url" v-for="item in userEntries">{{ item.fields.animalName }}</li>
      </ul>
    </card>
  </div>
</template>

<script>
export default {
  computed: {
    userEntries() {
      return this.$store.state.dashboardData.filter(
        entry => entry.fields.user === this.$store.state.email
      );
    }
  }
};
</script>

<style>
</style>