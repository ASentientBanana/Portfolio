<template>
  <div>
    <router-view />
  </div>
</template>  

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import ContactModal from "./components/ContactModal.vue";

interface DataInterface {
  flipCondition: string;
  flipCardInner: string;
  activateBack: string;
}
export default defineComponent({
  name: "Home",

  components: {
  },
  
});
</script>

<style lang="scss">
@import "./assets/colors/colors.scss";
* {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
  box-sizing: border-box;
}
body {
  background-color: $backgroundColor;
  height: 100vh;
  max-height: 100vh;
  padding-bottom: 60px;
  overflow: hidden;
}
</style>

