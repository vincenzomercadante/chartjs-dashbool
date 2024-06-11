<script>
import Doughnut from "./charts/DoughnutChart.vue";
import Bar from "./charts/BarChart.vue";
import axios from "axios";
import Line from "./charts/LineChart.vue";
import { apiUri } from "../assets/store/store";
import LoadingComponent from "./ui/Loading.vue";
import { faL } from "@fortawesome/free-solid-svg-icons";

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

      dailyDevice: {
        data: [],
        received: null,
      },

      dailyUserAge: {
        data: [],
        received: null,
      },
    };
  },

  methods: {
    // get all the monthly connections
    fetchMonthlyConnections() {
      axios.get(apiUri + "MonthlyConnections").then((res) => {
        this.monthlyConnections.data = res.data;
        this.monthlyConnections.received = true;
      });
    },

    // get all the monthly connections user age
    fetchUserAge() {
      axios.get(apiUri + "UsersAgeRange").then((res) => {
        this.userAge.data = res.data;
        this.userAge.received = true;
      });
    },

    // get all the monthly connections devices
    fetchMonthlyDevices() {
      axios.get(apiUri + "Devices").then((res) => {
        this.monthlyDevices.data = res.data;
        this.monthlyDevices.received = true;
      });
    },

    fetchDailyConnections() {
      axios.get(apiUri + "DailyConnections").then((res) => {
        const dailyConnections = res.data;
        for (let connection of dailyConnections) {
          this.getDailyDevice(connection);
          this.getDailyUserRange(connection);
        }
        this.dailyDevice.received = true;
        this.dailyUserAge.received = true;
      });
    },

    // get the daily device connected
    getDailyDevice(connection) {
      const dailyDeviceItem = this.itemExists(connection.device, "device");

      if (dailyDeviceItem) {
        dailyDeviceItem.connections++;
      } else {
        const item = {
          os: connection.device,
          connections: 1,
        };
        this.dailyDevice.data.push(item);
      }
    },

    // get the daily user age connected
    getDailyUserRange(connection) {
      const dailyAgeItem = this.itemExists(connection.age, "age");

      if (dailyAgeItem) {
        dailyAgeItem.connections++;
      } else {
        const item = {
          range: connection.age,
          connections: 1,
        };
        this.dailyUserAge.data.push(item);
      }
    },

    itemExists(haystack, type) {
      const needle =
        type === "device"
          ? this.dailyDevice.data.find((item) => item.os === haystack)
          : this.dailyUserAge.data.find((item) => item.range === haystack);

      if (needle) return needle;
      else return false;
    },
  },

  mounted() {
    this.fetchMonthlyConnections();
    this.fetchUserAge();
    this.fetchMonthlyDevices();
    this.fetchDailyConnections();
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
            v-if="dailyUserAge.received"
            canvaId="user-range-bar-today"
            chartTitle="User Age Range"
            :values="dailyUserAge"
          />
        </div>

        <!-- operating system chart -->
        <div class="col-6">
          <Doughnut
            v-if="dailyDevice.received"
            chartTitle="Operating System"
            canvaId="os-doughnut-today"
            :values="dailyDevice"
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
