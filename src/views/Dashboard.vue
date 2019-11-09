<template>
  <div class="dashboard">
    This is your dashboard, dear {{ this.$store.state.email }}
    <card>
      <b-card-header>Your recent entries:</b-card-header>
      <b-card-body>
        <ul>
          <li v-bind:key="item.fields.url" v-for="item in userEntries">{{ item.fields.animalName }}</li>
        </ul>
      </b-card-body>
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