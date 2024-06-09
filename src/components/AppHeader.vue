<script>
import UserImage from "./ui/UserImage.vue";
export default {
  components: { UserImage },
};
</script>

<template>
  <header
    class="d-flex justify-content-between align-items-center px-3 fw-bold"
  >
    <div>
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <div class="d-flex gap-1 align-items-center gap-3">
      <font-awesome-icon icon="fa-solid fa-envelope" />
      <div class="d-flex gap-1 align-items-center">
        <UserImage type="header" />
        <h3 class="m-0">Mario Rossi</h3>
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
header {
  background-color: $header-bg-color;
  font-size: 1.3rem;
  color: $header-txt-color;

  & * {
    cursor: pointer;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>
