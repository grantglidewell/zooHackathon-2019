<template>
  <li class="entry">
    <card
      :class="{ endangered: entry.fields.endangered }"
      class="position-relative"
    >
      <div class="d-md-flex align-items-center">
        <div class="mb-2 mb-md-0">
          <img
            src="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
            alt=""
            class="entry__image img-fluid avatar"
          />
        </div>
        <div class="row align-items-center pl-md-2 w-100">
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
          <div v-if="!simple" class="col-12 col-md-4 text-md-right">
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
export default {
  props: {
    entry: {
      type: Object,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.endangered {
  background: rgba(255, 0, 0, 0.1) !important;
}
</style>