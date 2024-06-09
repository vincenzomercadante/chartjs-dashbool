<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppSidebar from "./components/AppSidebar.vue";

export default {
  components: { AppHeader, AppMain, AppSidebar },
};
</script>

<template>
  <div class="app-wrapper d-grid">
    <AppSidebar />
    <div class="main-wrapper d-grid">
      <AppHeader />
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss">
@use "./assets/styles/app.scss";
</style>
