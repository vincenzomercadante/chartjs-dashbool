<script>
export default {
  props: { item: Object },
};
</script>

<template>
  <div class="d-flex align-items-center list-item gap-3">
    <font-awesome-icon :icon="'fa-solid ' + item.icon" />
  </div>
</template>

<style lang="scss" scoped></style>
