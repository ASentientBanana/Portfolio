<template>
  <div>
    <NavBar
      :toHomeCallback="flipToHOmeElement"
      :toProjectsCallback="flipToProjectsElement"
    />
    <MainContainer
      :flipCondition="flipCondition"
      :flipCardInner="flipCardInner"
    />
    <ContactModal />
  </div>
</template>
//  
<style lang="scss">
@font-face {
  font-family: courierRegular;
  src: url("./assets/fonts/CourierNewRegular.ttf");
}
* {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
  box-sizing: border-box;
}
body {
  background-color: #15222a;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import MainContainer from "./components/MainContainer.vue";
import ContactModal from "./components/ContactModal.vue";
interface DataInterface {
  flipCondition: string;
  flipCardInner: string;
}
export default defineComponent({
  name: "Home",

  components: {
    NavBar,
    MainContainer,
    ContactModal
  },
  data: () => {
    const d: DataInterface = {
      flipCondition: "flip-condition",
      flipCardInner: "flip-card-inner"
    };
    return d;
  },
  methods: {
    flipToHOmeElement: function() {
      this.flipCondition = "flip-condition";
    },
    flipToProjectsElement: function() {
      this.flipCondition = "null";
    }
  }
});
</script>