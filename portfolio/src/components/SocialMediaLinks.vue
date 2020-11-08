<template>
    <div class="social-button-container">
      <!-- <div v-for="(socialLink,index) in socialLinks" :key="index" ></div> -->
      <a v-for="(link,index) in socialLinks" :href="link.link" :key="index">{{link.name}}</a>
    </div>
</template>


<style scoped lang="scss">
@import '../assets/colors/colors.scss';
.social-button-container{
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  bottom: 0px;
  // background-color: rgb(31, 30, 30);
  border:solid $accentColor 2px;
  a{
    text-decoration: none;
    color: $accentColor;
  }
}
</style>


<script lang="ts">
import { defineComponent } from "vue";
import { stringifyQuery } from "vue-router";
export default defineComponent({
  name: "SocialConatainer",
  components: {},
  data:()=>{
      return{
        socialLinks:[
              {name:"GitHub",link:""},
              {name:"Linked In",link:""},
              {name:"Email",link:""}
          ]
      }
    }
});
</script>