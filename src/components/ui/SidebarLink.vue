<script>
export default {
  data() {
    return {
      linkClicked: false,
    };
  },

  props: { item: Object },
};
</script>

<template>
  <!-- single list item -->
  <div
    class="d-flex align-items-center list-item gap-3 fw-semibold"
    @click="linkClicked = !linkClicked"
  >
    <!-- list item icon -->
    <font-awesome-icon :icon="'fa-solid ' + item.icon" />

    <!-- text area with chevron -->
    <div
      class="flex-grow-1 text-uppercase d-flex align-items-center justify-content-between"
    >
      {{ item.txt }}
      <font-awesome-icon
        icon="fa-solid fa-chevron-down"
        :class="linkClicked ? 'd-none' : 'd-block'"
      />
      <font-awesome-icon
        icon="fa-solid fa-chevron-up"
        :class="linkClicked ? 'd-block' : 'd-none'"
      />
    </div>
  </div>

  <!-- collapse which will opened after user click on a list item -->
  <div
    class="custom-collapse-container mt-3"
    :class="linkClicked ? 'open' : ''"
  >
    <!-- collapse link -->
    <ul class="p-0 fs-6">
      <li class="px-5 py-2">Dashboard 1</li>
      <li class="px-5 py-2">Dashboard 2</li>
      <li class="px-5 py-2">Dashboard 3</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.list-item {
  cursor: pointer;
}

.custom-collapse-container {
  height: 0;
  overflow: hidden;
  transition: height 0.3s linear;

  li {
    cursor: pointer;

    &:hover {
      background-color: $collapse-hover-bg;
    }
  }
}

.custom-collapse-container.open {
  height: 130px;
}
</style>
