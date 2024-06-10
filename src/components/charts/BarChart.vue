<script>
// import all the necessarry stuff to create the chart
import {
  Chart,
  BarElement,
  Legend,
  Title,
  BarController,
  Tooltip,
} from "chart.js";

Chart.register(BarElement, Legend, Title, BarController, Tooltip);

export default {
  data() {
    return {
      labels: [],
      data: [],
    };
  },

  props: { chartTitle: String, canvaId: String, values: Object },

  methods: {
    getData() {
      if (this.values.data) {
        for (let ageRange of this.values.data) {
          this.labels.push(ageRange.range);
          this.data.push(ageRange.connections);
        }
      }

      return {
        labels: this.labels,
        datasets: [
          {
            label: this.period,
            data: this.data,

            hoverOffset: 4,
          },
        ],
      };
    },

    getOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      };
    },
  },

  mounted() {
    // get chart canva
    const canva = document.getElementById(this.canvaId);

    // create a new istance of chart
    const myChart = new Chart(canva, {
      type: "bar",
      data: this.getData(),
      options: this.getOptions(),
    });
  },
};
</script>

<template>
  <!-- chart card -->
  <div class="card p-3 border-0">
    <!-- chart title -->
    <h4 class="text-center m-0 fw-bold">{{ chartTitle }}</h4>
    <hr />
    <!-- chart canva -->
    <div
      class="canva-container d-flex align-items-center justify-content-center"
    >
      <canvas :id="canvaId"></canvas>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

h4 {
  color: $charts-title-color;
}

.canva-container {
  height: $canva-height;
  width: $canva-width;
}
</style>
