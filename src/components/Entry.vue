<template>
  <li class="entry">
    <card>
      <div class="d-sm-flex align-items-center">
        <div class="mb-2 mb-sm-0">
          <img
            src="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
            alt=""
            class="entry__image img-fluid avatar"
          />
        </div>
        <div class="row align-items-center pl-sm-2 w-100">
          <div
            :class="!simple ? 'col-12 col-sm-8' : 'd-flex align-items-center'"
          >
            <h4 class="mb-0 mr-2">{{ entry.fields.animalName }}</h4>
            <small class="font-weight-bold">
              Submitted by: {{ entry.fields.user }}
            </small>
          </div>
          <div v-if="!simple" class="col-12 col-sm-4 text-sm-right">
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

<style>
</style>