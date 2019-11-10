<template>
  <div style="font-size:2rem">
    <h1 class="m-0">
      {{ emoji }}
      <span>{{ rank }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    emoji: {
      required: true,
      type: String
    },
    rank: {
      type: Number,
      required: true
    }
  }
};
</script>

<style>
</style>