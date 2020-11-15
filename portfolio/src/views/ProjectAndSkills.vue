<template>
  <div class="main-container">
    <h1 class="title">Projects</h1>
    <!-- <div class="tag-container">
      <h3>Tags</h3>
      <div>
        <TechTag
          v-for="(i, index) in Object.keys(technologies)"
          :key="index"
          :tagText="i"
          :technologies="technologies"
        />
      </div>
    </div> -->
    <div class="project-container">
      <ProjectCard
        v-for="(proj, index) in projects"
        :key="index"
        :id="index"
        :name="proj.name + ' ' + index"
        :description="proj.description"
        :image="require('../assets/images/tmp.png')"
        :tech="proj.tech"
        :github="proj.github"
        :live="proj.live"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import TechTag from "../components/TechTag.vue";
// import tmp from '../assets/images/tmp.png';

export default defineComponent({
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          name: "project:",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro odio soluta maxime id illo quasi, eos tenetur esse reprehenderit laudantium vitae sapiente, a maiores perferendis ex. Error, rem doloremque.",
          image: "tmp.png",
          tech: ["vue", "react", "nodejs"],
        },
        {
          name: "project:",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro odio soluta maxime id illo quasi, eos tenetur esse reprehenderit laudantium vitae sapiente, a maiores perferendis ex. Error, rem doloremque.",
          image: "tmp.png",
          tech: ["vue", "react", "C#"],
          github: "dasdasd",
        },
        {
          name: "Project:",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro odio soluta maxime id illo quasi, eos tenetur esse reprehenderit laudantium vitae sapiente, a maiores perferendis ex. Error, rem doloremque.",
          image: "tmp.png",
          tech: ["vue", "react", "nodejs"],
          live: "dasdas",
        },
        {
          name: "project:",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro odio soluta maxime id illo quasi, eos tenetur esse reprehenderit laudantium vitae sapiente, a maiores perferendis ex. Error, rem doloremque.",
          image: "tmp.png",
          tech: ["vue", "react", "nodejs"],
          github: "dasda",
          live: "dasdas",
        },
        {
          name: "project:",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro odio soluta maxime id illo quasi, eos tenetur esse reprehenderit laudantium vitae sapiente, a maiores perferendis ex. Error, rem doloremque.",
          image: "tmp.png",
          tech: ["vue", "react", "nodejs"],
        },
        {
          name: "project:",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro odio soluta maxime id illo quasi, eos tenetur esse reprehenderit laudantium vitae sapiente, a maiores perferendis ex. Error, rem doloremque.",
          image: "tmp.png",
          tech: ["vue", "react", "nodejs"],
        },
      ],
      technologies: {
        vue: "green",
        react: "blue",
        node: "teal",
        csharp: "purple",
      },
    };
  },
  mounted(){
    console.log(Object.keys(this.technologies));
    window.addEventListener('wheel',()=>{
      console.log('scroll');
      
    })
    
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";
.main-container {
  background-color: #15222a;
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
    max-width: 50vw;
    overflow-y:scroll;
    // scrollbar-color: $accentColor $backgroundColor;
    // scrollbar-width: thin;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    
  }
  @media only screen and (max-width: 768px) {
    .project-container {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
