<script>
import { colors } from "../../assets/store/store";

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
      labels: [],
      data: [],
      bgColors: [],
    };
  },

  methods: {
    // get the chart data
    getData() {
      if (this.values.data) {
        for (let connection of this.values.data) {
          this.labels.push(connection.os);
          this.data.push(connection.connections);
        }

        this.getBackgroundColors();
      }

      return {
        labels: this.labels,
        datasets: [
          {
            label: this.period,
            data: this.data,
            hoverOffset: 4,
            backgroundColor: this.bgColors,
          },
        ],
      };
    },

    // get the chart options
    getOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            align: "center",
          },
        },
      };
    },

    // fill the bgcolors array based on the labels' array
    getBackgroundColors() {
      for (let i = 0; i < this.labels.length; i++) {
        this.bgColors.push(colors[i]);
      }
    },
  },

  props: { chartTitle: String, canvaId: String, values: Object },

  mounted() {
    // get chart's canva
    const canva = document.getElementById(this.canvaId);

    // create new chart istance
    const myChart = new Chart(canva, {
      type: "doughnut",
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
