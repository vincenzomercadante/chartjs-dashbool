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
      // chart information
      data: {
        labels: ["Red", "Yellow", "Blue"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      // chart options
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },

  props: { chartTitle: String, canvaId: String },

  mounted() {
    // get chart canva
    const canva = document.getElementById(this.canvaId);

    // create a new istance of chart
    const myChart = new Chart(canva, {
      type: "bar",
      data: this.data,
      options: this.options,
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
