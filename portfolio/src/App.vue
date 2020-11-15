<template>
  <div>
    <NavBar
      :toHomeCallback="flipToHOmeElement"
      :toProjectsCallback="flipToProjectsElement"
    />
    <MainContainer
      :flipCondition="flipCondition"
      :flipCardInner="flipCardInner"
      :activateback="activateBack"
    />
    <footer>
    <ContactModal />
    </footer>
  </div>
</template>  
<style lang="scss">
@import "./assets/colors/colors.scss";
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
  background-color: $backgroundColor;
  height: 100vh;
  max-height: 100vh;
  padding-bottom:60px ;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer{
  width: 100vw;
  height: 60px;

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
  activateBack:string;
}
export default defineComponent({
  name: "Home",

  components: {
    NavBar,
    MainContainer,
    ContactModal
  },
  data: () => {
    const data: DataInterface = {
      flipCondition: "flip-condition",
      flipCardInner: "flip-card-inner",
      activateBack:"null"

    };
    return data;
  },
  methods: {
    flipToHOmeElement() {
      this.flipCondition = "flip-condition";
      this.activateBack = 'deactivate-back'
      console.log(this.activateBack);
      
    },
    flipToProjectsElement() {
      this.flipCondition = "null";
      this.activateBack = 'activate-back'
      console.log(this.activateBack);
    }
  }
});
</script>