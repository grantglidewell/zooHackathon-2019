<template>
  <div>
    <h3>
      <i class="ni ni-lock-circle-open"></i>
      Unlocked:
    </h3>
    <ul
      class="list-unstyled pl-0 d-flex flex-wrap align-items-center justify-content-center"
    >
      <li v-for="emoji in $store.state.rank.unlocked" :key="emoji" class="m-1">
        <base-button
          @click="$store.dispatch('changeEmoji', emoji)"
          type="link"
          :disabled="$store.state.rank.emoji === emoji"
        >
          {{ emoji }}
        </base-button>
      </li>
    </ul>
    <h3>
      <i class="ni ni-lock-circle-open"></i>
      Locked:
    </h3>
    <ul
      class="list-unstyled pl-0 d-flex flex-wrap align-items-center justify-content-center"
    >
      <li v-for="emoji in locked" :key="emoji" class="m-1">
        <base-button type="link" disabled title="This is locked">
          {{ emoji }}
        </base-button>
      </li>
    </ul>
  </div>
</template>

<script>
import emojis from "@/data/emojis";

export default {
  data: () => ({
    emojis: emojis.all
  }),

  computed: {
    locked() {
      return this.emojis.filter(emoji => {
        return this.$store.state.rank.unlocked.indexOf(emoji);
      });
    }
  }
};
</script>

<style>
</style>