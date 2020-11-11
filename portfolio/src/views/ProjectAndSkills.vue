<template>
  <div class="main-container">
    <h1 class="title">Projects</h1>
    <div class="tag-container">
      <h1>Pick a tag</h1>
      <input type="button" value="" />
      <input type="button" value="" />
      <input type="button" value="" />
      <input type="button" value="" />
      <input type="button" value="" />
    </div>
    <div class="project-container">
      <input type="button" value="" />
      <input type="button" value="" />
      <input type="button" value="" />
      <input type="button" value="" />
      <input type="button" value="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projects",
  components: {}
});
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";
.main-container {
  .title {
    color: white;
  }
  .tag-container {
    h1 {
      color: white;
    }
    width: 100%;
    min-height: 30px;
    border: white solid 1px;
    padding: 5px;
  }
}
</style>
