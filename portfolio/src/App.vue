<template>
  <div>
    <router-view />
  </div>
</template>  

<script lang="ts">
import { defineComponent , provide , ref} from "vue";
import NavBar from "./components/NavBar.vue";
import ContactModal from "./components/ContactModal.vue";
import axios from 'axios'
export default {
  name: "Home",

  setup() {
    const projectList  = ref([])
    axios.get('https://api.petarkocic.net/projects').then((response=>{
      projectList.value = response.data
      console.log(projectList);
      
    })).catch(err=>console.log(err))

  provide('projectsList',projectList)
},
};
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

