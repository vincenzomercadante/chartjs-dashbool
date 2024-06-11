<script>
import Doughnut from "./charts/DoughnutChart.vue";
import Bar from "./charts/BarChart.vue";
import axios from "axios";
import Line from "./charts/LineChart.vue";
import { apiUri } from "../assets/store/store";
import LoadingComponent from "./ui/Loading.vue";

export default {
  components: {
    Doughnut,
    LoadingComponent,
    Bar,
    Line,
  },
  data() {
    return {
      monthlyConnections: {
        data: null,
        received: false,
      },
      userAge: {
        data: null,
        received: false,
      },
      monthlyDevices: {
        data: null,
        received: false,
      },
    };
  },

  methods: {
    fetchMonthlyConnections() {
      axios.get(apiUri + "MonthlyConnections").then((res) => {
        this.monthlyConnections.data = res.data;
        this.monthlyConnections.received = true;
      });
    },

    fetchUserAge() {
      axios.get(apiUri + "UsersAgeRange").then((res) => {
        this.userAge.data = res.data;
        this.userAge.received = true;
      });
    },

    fetchMonthlyDevices() {
      axios.get(apiUri + "Devices").then((res) => {
        this.monthlyDevices.data = res.data;
        this.monthlyDevices.received = true;
      });
    },
  },

  mounted() {
    this.fetchMonthlyConnections();
    this.fetchUserAge();
    this.fetchMonthlyDevices();
  },
};
</script>

<template>
  <main class="p-3">
    <div class="container-fluid">
      <div class="row g-3">
        <!-- monthly connection chart -->
        <div class="col-12">
          <Line
            v-if="monthlyConnections.received"
            canvaId="connection-chart"
            chartTitle="Monthly Connections"
            period="Montly"
            :values="monthlyConnections"
          />
        </div>

        <!-- user age range chart -->
        <div class="col-6">
          <Bar
            v-if="userAge.received"
            canvaId="user-range-bar"
            chartTitle="User Age Range"
            :values="userAge"
          />
        </div>

        <!-- operating system chart -->
        <div class="col-6">
          <Doughnut
            v-if="monthlyDevices.received"
            chartTitle="Operating System"
            canvaId="os-doughnut"
            :values="monthlyDevices"
          />
        </div>
      </div>

      <div class="row g-3">
        <!-- solar power chart -->
        <div class="col-12">
          <Line
            canvaId="solar-power-chart"
            chartTitle="Solar Power"
            period="Daily"
            :values="{}"
          />
        </div>

        <h3 class="fw-bold fs-2 text-center">Today</h3>

        <!-- user age range chart -->
        <div class="col-6">
          <Bar
            canvaId="user-range-bar-today"
            chartTitle="User Age Range"
            :values="{}"
          />
        </div>

        <!-- operating system chart -->
        <div class="col-6">
          <Doughnut
            chartTitle="Operating System"
            canvaId="os-doughnut-today"
            :values="{}"
          />
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
