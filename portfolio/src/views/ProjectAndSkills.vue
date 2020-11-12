<template>
  <div class="main-container">
    <h1 class="title">Projects</h1>
    <div class="tag-container">
      <h1>Pick a tag</h1>
      <input v-for="(i,index) in 10" :key="index" type="button" value="" />
    </div>
    <div class="project-container">
      <input v-for="(i,index) in 10" :key="index" type="button" value="" />
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
  background-color:#15222a;
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
    input[type="button"]{
      width: 60px;
      height: 30px;
    }
  }
  .project-container{
    input[type='button']{
      height: 150px;
      width: 150px;
    }
  }
}
</style>
