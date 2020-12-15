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
        :name="proj.name"
        :description="proj.description"
        :image="require(`../assets/images/projects/${proj.image}` )"
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
          name: "project",
          description:
            "A simple blog using react ,nodejs and postgre sql",
          image: "tmp.png",
          github:"https://github.com/ASentientBanana/blog",
          tech: ["vue", "nodejs"],
        },
        {
          name: "Sorting Visualiser",
          description:
            "A visualiser made in react showing how bubble sort , selection sort and quicksort work",
          image: "sort.png",
          github:"https://github.com/ASentientBanana/blog",
          live:"https://www.sorting.petarkocic.net/",
          tech: ["ReactJS", "JavaScript", "CSS","HTML"],
        },
        {
          name: "Movie info app",
          description:
            "An app for displaing information about movies such as actor credits written in flutter and using The MovieDb API.",
          image: "sort.png",
          github:"https://github.com/ASentientBanana/FlutterActorCredits",
          live:"https://www.sorting.petarkocic.net/",
          tech: ["ReactJS", "JavaScript", "CSS","HTML"],
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
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";
.main-container {
  background-color: #15222a;
  // border: thistle 1px solid;
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
    overflow-y:scroll;
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
