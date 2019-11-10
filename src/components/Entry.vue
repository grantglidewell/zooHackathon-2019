<template>
  <li class="entry">
    <card :class="{ endangered: entry.fields.endangered }">
      <div class="d-md-flex align-items-center">
        <div
          class="d-flex align-items-center justify-content-center mb-2 mb-md-0"
        >
          <badge type="clear" class="mr-3">
            <div class="mb-2">Rank</div>
            <rank :emoji="contr[2]" :rank="contr[3]" />
          </badge>
          <img
            src="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
            alt=""
            class="entry__image img-fluid avatar"
          />
        </div>
        <div class="row align-items-center pl-md-4 w-100">
          <div class="col-12 col-md-8">
            <h4 class="mb-0 mr-2">{{ entry.fields.animalName }}</h4>
            <small class="font-weight-bold">
              Submitted by: {{ entry.fields.user }}
            </small>
            <div>
              <badge v-if="entry.fields.endangered" type="danger">
                Possibly Endangered
              </badge>
            </div>
          </div>
          <div
            v-if="!simple"
            class="col-12 col-md-4 mt-2 mt-md-0 text-md-right"
          >
            <div>
              <i class="ni ni-watch-time"></i>
              {{ entry.createdTime | moment("from", "now") }}
            </div>
            <div>${{ entry.fields.animalPrice }}</div>
          </div>
        </div>
      </div>
    </card>
  </li>
</template>

<script>
import Rank from "@/components/Rank";

export default {
  components: {
    Rank
  },

  props: {
    entry: {
      type: Object,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    contr() {
      if (this.entry.fields.user === this.$store.state.email) {
        return [0, 0, this.$store.state.rank.emoji, this.$store.getters.rank];
      }
      for (let i = 0; i < this.$store.getters.topContributors.length; i++) {
        if (
          this.$store.getters.topContributors[i][0] === this.entry.fields.user
        ) {
          const user = [...this.$store.getters.topContributors[i]];
          user[3] = Math.floor(this.$store.getters.topContributors[i][1] / 5);
          return user;
        }
      }
      return [];
    }
  }
};
</script>

<style lang="scss">
.endangered {
  background: rgba(255, 0, 0, 0.1) !important;
}
</style>