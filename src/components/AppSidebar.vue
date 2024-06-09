<script>
import UserImage from "./ui/UserImage.vue";
import SidebarLink from "./ui/SidebarLink.vue";
import { sidebarLinks } from "../assets/store/store.js";

export default {
  data() {
    return {
      sidebarLinks,
    };
  },
  components: { UserImage, SidebarLink },
};
</script>

<template>
  <aside class="p-3">
    <!-- main title -->
    <h1 class="m-0 fw-bold fs-5">- DashBool -</h1>

    <!-- user pic -->
    <div class="d-flex align-items-center gap-3 mt-4">
      <UserImage type="sidebar" />
      <div>
        <h2 class="fs-6">
          Welcome <br />
          <span class="fw-bold">Mario Rossi</span>
        </h2>
      </div>
    </div>

    <!-- nav link -->
    <ul class="mt-4 p-0 fs-5">
      <li v-for="link in sidebarLinks" class="my-2">
        <SidebarLink :item="link" />
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
aside {
  background-color: $sidebar-bg-color;
  color: $sidebar-txt-color;
}
</style>
