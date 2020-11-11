<template>
  <div class="flip-card">
    <div :class="[flipCondition,flipCardInner]">
      <div class="flip-card-front">
        <Projects />
      </div>
      <div class="flip-card-back">
          <Home />
      </div>
    </div>
        
  </div>
</template>

<style scoped lang="scss">
@import "../assets/colors/colors.scss";

.flip-card {
  background-color: transparent;
  width: 100%;
  min-height: 90vh;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  padding: 5%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-condition{
    transform: rotateY(180deg);  
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

</style>

<script lang="ts">
import { defineComponent } from "vue";
import { stringifyQuery } from "vue-router";
import Home from '../views/Home.vue';
import Projects from '../views/ProjectAndSkills.vue'
export default defineComponent({
  name: "MainContainer",
  components: {
    Home,
    Projects
  },
  
  
  data: () => {
    return {
      x:"flip-condition",
      y:"flip-card-inner"
    };
  },
  props:['flipCondition','flipCardInner'],

});
</script>
