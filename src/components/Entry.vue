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
            <div class="d-flex justify-content-end w-100">
              <span>
                <i class="ni ni-watch-time"></i>
                {{ entry.createdTime }}
              </span>
            </div>
          </div>
        </div>
      </div>
      {{ entry }}
    </card>
  </li>
</template>

<script>
import moment from "moment";

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