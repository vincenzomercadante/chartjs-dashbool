<script>
// import all the necessarry stuff to create the chart

import {
  Chart,
  Legend,
  Title,
  Tooltip,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";

Chart.register(
  Legend,
  Title,
  Tooltip,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
);

export default {
  data() {
    return {
      labels: [],
      data: [],
    };
  },

  props: {
    chartTitle: String,
    canvaId: String,
    values: Object,
  },

  methods: {
    getData() {
      if (this.values.data) {
        for (let connection of this.values.data) {
          this.labels.push(connection.month);
          this.data.push(connection.connections);
        }
      }

      return {
        labels: this.labels,
        datasets: [
          {
            label: "Daily",
            data: this.data,
            backgroundColor: "#dfeaec",
            bordercolor: "#91b7be",
            hoverOffset: 4,
            fill: "start",
            tension: 0.4,
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
            display: true,
          },
        },
      };
    },
  },

  mounted() {
    // get chart's canva
    const canva = document.getElementById(this.canvaId);

    // create new istance of chart
    const myChart = new Chart(canva, {
      type: "line",
      data: this.getData(),
      options: this.getOptions(),
    });
  },
};
</script>

<template>
  <!-- chart's card -->
  <div class="card p-3 border-0">
    <!-- chart's title -->
    <h4 class="text-center m-0 fw-bold">{{ chartTitle }}</h4>
    <hr />
    <!-- chart's canva -->
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
