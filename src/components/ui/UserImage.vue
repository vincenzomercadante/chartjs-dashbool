<script>
export default {
  props: { type: String },
};
</script>

<template>
  <div class="profile-image" :class="type === 'header' ? 'header' : 'sidebar'">
    <img src="../../assets/img/profile-img.webp" alt="profile image" />
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.profile-image {
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
  }
}

.header {
  img {
    height: 40px;
  }
}

.sidebar {
  border: 3px solid $sidebar-txt-color;
  img {
    height: 60px;
  }
}
</style>
