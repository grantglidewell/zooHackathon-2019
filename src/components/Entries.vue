<template>
  <div class="entries">
    <ul v-if="entries" class="pl-0 list-unstyled">
      <entry
        v-for="item in entries"
        :key="item.fields.url"
        :entry="item"
        class="mb-2"
        :simple="simple"
      >
      </entry>
    </ul>
    <div v-else class="text-center">
      No entries found.
    </div>
  </div>
</template>

<script>
import Entry from "@/components/Entry";

export default {
  components: {
    Entry
  },

  props: {
    entries: {
      type: Array,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>