<template>
  <fade-transition>
    <card
      v-if="$store.getters.topContributors.length"
      header-classes="bg-transparent"
    >
      <div v-if="chartData.datasets.length">
        <bar-chart
          :height="350"
          ref="barChart"
          :chart-data="chartData"
        ></bar-chart>
      </div>
    </card>
  </fade-transition>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  /* eslint-disable no-unused-vars */
  components: {
    FadeTransition
  },

  computed: {
    chartData() {
      return {
        labels: this.$store.getters.topContributors.map(([name]) => name),
        datasets: [
          {
            label: "contributions",
            data: this.$store.getters.topContributors.map(
              ([_, length]) => length
            )
          }
        ]
      };
    }
  }
};
</script>

