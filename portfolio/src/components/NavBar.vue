<template>
    <nav>
        <router-link class="nav-link" v-for="(link,index) in navLinks" :to="link.to" :key="index">{{link.body}}</router-link> 
        <!-- <router-link :to="{name:'AboutMe',params:{id:555}}">Profile</router-link> -->
    </nav>
</template>


<style scoped lang="scss">
@import '../assets/colors/colors.scss';
nav{
    border-bottom:solid 1px $accentColor;

    height: 50px;
    display: flex;
    justify-content: space-around;
    .nav-link{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color:  $accentColor;
    }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { stringifyQuery } from "vue-router";
export default defineComponent({
  name: "NavBar",
  components: {
  },
  data:()=>{
      return{
          navLinks:[
              {to:'/', body:"About Me"},
              {to:'/projects-and-skills', body:"Projects & Skills"}
          ]
      }
    }
});
</script>