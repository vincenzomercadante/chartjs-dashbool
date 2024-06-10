<script>
// import all the necessarry stuff to create the chart

import {
  Chart,
  ArcElement,
  Legend,
  Title,
  DoughnutController,
  LinearScale,
  CategoryScale,
} from "chart.js";

Chart.register(
  ArcElement,
  Legend,
  Title,
  DoughnutController,
  LinearScale,
  CategoryScale
);

export default {
  data() {
    return {
      // chart's information
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

      // chart's options
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            align: "center",
          },
        },
      },
    };
  },

  props: { chartTitle: String, canvaId: String },

  mounted() {
    // get chart's canva
    const canva = document.getElementById(this.canvaId);

    // create new chart istance
    const myChart = new Chart(canva, {
      type: "doughnut",
      data: this.data,
      options: this.options,
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
      <canvas
        :id="canvaId"
        class="d-flex align-items-center justify-content-between"
      ></canvas>
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
