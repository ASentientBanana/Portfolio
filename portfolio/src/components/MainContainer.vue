<template>
  <div class="flip-card" v-on:click="flipMainElement">
    <div :class="[x,y]" >
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
  // border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
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
/* Do an horizontal flip when you move the mouse over the flip box container */


/* Position the front and back side */
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
  methods:{
    flipMainElement:function(){
      this.x == 'flip-condition'?this.x = 'null':this.x = 'flip-condition';
    }
  },
});
</script>
