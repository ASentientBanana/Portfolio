<template>
<div>
  <NavBar />
  <!-- <router-view /> -->
  <MainContainer />
  <div class="btn-container">
   <div class="container">
    <div class="center">
      <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Contact Me</span>
      </button>
    </div>
  </div>
  </div>
</div>
</template>

<style lang="scss">
@font-face {
  font-family: courierRegular;
  src: url('./assets/fonts/CourierNewRegular.ttf');
}
*{
  margin: 0;
  padding: 0;
  // font-family: courierRegular;
  font-family: 'Courier New', Courier, monospace;
  box-sizing: border-box;
}
body{
  background-color: #15222a,;
  // padding: 0 10% ;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.btn-container{
.container {
  width: 400px;
  height: 400px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  width: 180px;
  height: 60px;
  position: absolute;
}

.btn {
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  // border: 1px solid #91C9FF;
  border: none;
  outline: none;
  // transition: 1s ease-in-out ;
  animation: snakeBorder 1s ease-in-out;
}

svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  animation: snakeBorder 5s infinite forwards;
  -webkit-animation-delay: 5s;
}


.btn:hover svg {
  stroke-dashoffset: -480;
}

.btn span {
  color: white;
  font-size: 18px;
  font-weight: 100;
}
@keyframes snakeBorder {
  0% {
      stroke-dashoffset: 150;
  }
  50% { 
    stroke-dashoffset: 780;
  }
  100% {
    stroke-dashoffset: 780;
  }
}
  
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from './components/NavBar.vue';
import MainContainer from './components/MainContainer.vue';

export default defineComponent({
  name: "Home",
  
  components: {
    NavBar,
    MainContainer,
  }
});
</script>