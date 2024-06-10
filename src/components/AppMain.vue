<script>
import Doughnut from "./charts/DoughnutChart.vue";
import Bar from "./charts/BarChart.vue";
import Line from "./charts/LineChart.vue";

export default {
  components: { Doughnut, Bar, Line },
  data() {},
};
</script>

<template>
  <main class="p-3">
    <div class="container-fluid">
      <div class="row g-3">
        <!-- monthly connection chart -->
        <div class="col-12">
          <Line
            canvaId="connection-chart"
            chartTitle="Monthly Connections"
            period="Montly"
          />
        </div>

        <!-- user age range chart -->
        <div class="col-6">
          <Bar canvaId="user-range-bar" chartTitle="User Age Range" />
        </div>

        <!-- operating system chart -->
        <div class="col-6">
          <Doughnut chartTitle="Operating System" canvaId="os-doughnut" />
        </div>
      </div>

      <div class="row g-3">
        <!-- solar power chart -->
        <div class="col-12">
          <Line
            canvaId="solar-power-chart"
            chartTitle="Solar Power"
            period="Daily"
          />
        </div>

        <h3 class="fw-bold fs-2 text-center">Today</h3>

        <!-- user age range chart -->
        <div class="col-6">
          <Bar canvaId="user-range-bar-today" chartTitle="User Age Range" />
        </div>

        <!-- operating system chart -->
        <div class="col-6">
          <Doughnut chartTitle="Operating System" canvaId="os-doughnut-today" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

main {
  background-color: $main-bg-color;
  overflow-y: auto;
}

.row:last-child {
  margin-top: 100px;
}
</style>
