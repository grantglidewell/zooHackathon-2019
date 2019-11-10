<template>
  <card header-classes="bg-transparent">
    <div slot="header" class="row align-items-center">
      <div class="col">
        <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
        <h5 class="h3 mb-0">Leading Contributors</h5>
      </div>
    </div>

    <div v-if="chartData.datasets.length">
      <bar-chart
        :height="350"
        ref="barChart"
        :chart-data="chartData"
      ></bar-chart>
    </div>
  </card>
</template>

<script>
export default {
  /* eslint-disable no-unused-vars */
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

