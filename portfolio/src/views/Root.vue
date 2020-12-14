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

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import ContactModal from "../components/ContactModal.vue";
import MainContainer from '../components/MainContainer.vue'

interface DataInterface {
  flipCondition: string;
  flipCardInner: string;
  activateBack: string;
}
export default defineComponent({
  name: "Root",

  components: {
    NavBar,
    MainContainer,
    ContactModal,
  },
  data() {
    const data: DataInterface = {
      flipCondition: "flip-condition",
      flipCardInner: "flip-card-inner",
      activateBack: "null",
    };
    return data;
  },
  methods: {
    flipToHOmeElement() {
      this.flipCondition = "flip-condition";
      this.activateBack = "deactivate-back";
      console.log(this.activateBack);
    },
    flipToProjectsElement() {
      this.flipCondition = "null";
      this.activateBack = "activate-back";
      console.log(this.activateBack);
    },
  },
  mounted() {
    (async function(){
      const x = await fetch("localhost:5000/test")
        .then((c) => {
          console.log(x);
          console.log(c);
        })
        .catch((e) => {
          console.log(e);
        });
    })();
   
  },
});
</script>

<style lang="scss">
@import "../assets/colors/colors.scss";
@font-face {
  font-family: courierRegular;
  src: url("../assets/fonts/CourierNewRegular.ttf");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer {
  width: 100vw;
  height: 60px;
}
</style>

