<template>
  <div class="entries">
    <ul class="pl-0 list-unstyled">
      <entry
        v-for="item in userEntries"
        :key="item.fields.url"
        :entry="item"
        class="mb-2"
        :simple="simple"
      >
      </entry>
    </ul>
  </div>
</template>

<script>
import Entry from "@/components/Entry";

export default {
  components: {
    Entry
  },

  props: {
    simple: {
      type: Boolean,
      default: false
    }
  },

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