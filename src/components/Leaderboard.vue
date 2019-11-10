<template>
  <card v-if="$store.getters.topContributors.length" header-classes="bg-transparent">
    <div slot="header" class="row align-items-center">
      <div class="col">
        <h5 class="h4 mb-0">Leading Contributors</h5>
      </div>
    </div>

    <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData"></bar-chart>
  </card>
</template>

<script>
export default {
  /* eslint-disable no-unused-vars */
  data() {
    return {
      redBarChart: {
        chartData: {
          labels: this.$store.getters.topContributors.map(([name]) => name),
          datasets: [
            {
              label: "contributions",
              data: this.$store.getters.topContributors.map(
                ([_, length]) => length
              )
            }
          ]
        }
      }
    };
  }
};
</script>

