<template>
  <div class="main-container">
    <h1 class="title">Projects</h1>
    <!-- <label for="search-projects"  placeholder="C#,Nodejs">Search projects </label> -->
    <!-- <input type="search" v-model="search" name="search-projects" id="search-projects"> -->
    <h1 v-if="isLoading">{{ isLoading }}</h1>
    <div class="project-container">
      <ProjectCard
        v-for="(proj, index) in projectList"
        :key="index"
        :id="index"
        :name="proj.name"
        :description="proj.description"
        :image="proj.image"
        :tech="proj.tech"
        :github="proj.git"
        :live="proj.live"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent , inject} from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import TechTag from "../components/TechTag.vue";
export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  setup(){
    const projectList = inject('projectsList');
    return{
      projectList
    }
    
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";
.main-container {
  background-color: #15222a;
  label{
    color:$accentColor
  }
  .title {
    color: $accentColor;
  }
  .tag-container {
    width: 60%;
    margin: auto;
    div {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    border-bottom: solid 2px $accentColor;
    padding-bottom: 10px;
  }
  ::-webkit-scrollbar {
    background-color: $backgroundColor;
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: $accentColor;
  }
  .project-container {
    margin: auto;
    padding-top: 10px;
    max-height: 60vh;
    max-width: 90vw;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
  }
  @media only screen and (max-width: 768px) {
    .project-container {
      display: flex;
      flex-direction: column;
      // border: teal solid 1px;
      max-width: 95% !important;
    }
  }
}
</style>
