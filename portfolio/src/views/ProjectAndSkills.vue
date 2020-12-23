<template>
  <div class="main-container">
    <h1 class="title">Projects</h1>
    <label for="search-projects"  placeholder="C#,Nodejs">Search projects </label>
    <input type="search" v-model="search" name="search-projects" id="search-projects">
    <h1 v-if="isLoading">{{ isLoading }}</h1>
    <div class="project-container">
      <ProjectCard
        v-for="(proj, index) in projectsTmp"
        :key="index"
        :id="index"
        :name="proj.name"
        :description="proj.description"
        :image="proj.image"
        :tech="['C#']"
        :github="proj.git"
        :live="proj.live"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import TechTag from "../components/TechTag.vue";
import axios from "axios";
export default defineComponent({
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
      projectsTmp:[],
      isLoading: false,
      search:'',
      technologies: {
        vue: "green",
        react: "blue",
        node: "teal",
        csharp: "purple",
      },
    };
  },
  methods: {
    async getProjectList() {
      try {
        const res = await axios.get("http://localhost:5000/get-projects");
        const data = await res.data;
        console.log(data);
        
        // this.projects = data;
        // this.projectsTmp = this.projects;
        // console.log(this.projectsTmp);
        
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch:{
    search:function(e:any){
        if(this.search === '')this.projectsTmp = this.projects
        else this.projectsTmp = this.projects.filter((project:any)=>project.name.includes(this.search))
    }
  },
  created() {
    this.getProjectList();
  },
});
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
