<template>
  <li class="entry">
    <card>
      <div class="row">
        <div class="col-auto col-md-auto">
          <img
            src="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
            alt=""
            class="entry__image img-fluid avatar"
          />
        </div>
        <div class="col-sm-6 col-md-10">
          <div class="d-block d-sm-flex">
            <div>
              <h4 class="mb-0">{{ entry.fields.animalName }}</h4>
              <small class="font-weight-bold">
                Submitted by: {{ entry.fields.user }}
              </small>
            </div>
            <div class="text-sm-right">
              <div>
                <i class="ni ni-watch-time"></i>
                {{ entry.createdTime }}
              </div>
              <div>${{ entry.fields.animalPrice }}</div>
            </div>
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
    }
  }
};
</script>

<style>
</style>