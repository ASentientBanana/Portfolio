<template>
  <div class="main-project-card-container">
    <div class="flip-card">
      <div :class="[flipState, 'flip-card-inner']">
        <div class="flip-card-front" >
          <img :src="image" :alt="name" @click="doAFlip" :class="clickEventDisable"/>
          <!-- <p>
            {{ description }}
          </p> -->
          <h1>{{ name }}</h1>
        </div>
        <div class="flip-card-back">
          <div class="card-back-header">
            <h1>{{ name }}</h1>
            <button class="back-btn" @click="doAFlip">X</button>
          </div>
          <p>{{ description }}</p>

          <ul>
            <li v-for="(t, i) in tech" :key="i">{{ t }}</li>
          </ul>
          <div class="project-links">
            <a href="" v-if="github">Github</a>
            <a href="" v-if="live">Live</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProjectCard",
  props: {
    id: Number,
    name: String,
    description: String,
    image: String,
    tech: [],
    github: String,
    live: String,
  },
  components: {},
  data() {
    return {
      flipState: "null",
      clickEventDisable:'null'
    };
  },
  methods: {
    doAFlip() {
      if (this.flipState === "do-a-flip") this.flipState = "null";
      else this.flipState = "do-a-flip";
      this.disableClick();
    },
    disableClick(){
      if (this.clickEventDisable === "click-event-diable") this.clickEventDisable = "null";
      else this.clickEventDisable = "click-event-diable";
    },
  },
});
</script>


<style scoped lang="scss">
@import "../assets/colors/colors.scss";
.main-project-card-container {
  .flip-card {
    background-color: transparent;
    width: 90%;
    height: 200px;
    perspective: 1000px;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .do-a-flip {
    transform: rotateX(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  .flip-card-front {
    background-color: $backgroundColor;
    // border: solid 1px $accentColor;
    color: #080b14;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    overflow: hidden;
    .click-event-diable{
      pointer-events: none;
    }
    img {
      width: 90%;
      height: 90%;
      
    }
    h1 {
      position: absolute;
      background-color: $backgroundColor;
      bottom: 0px;
      width: 100%;
      color: $accentColor;
    }
    p {
      display: flex;
      // background-color: red;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      font-size: 0.8rem;
    }
  }
  .flip-card-back {
    background-color: #080b14;
    color: $accentColor;
    transform: rotateX(180deg);
    padding {
      left: 50px;
    }
    div {
      display: block;
    }
    .back-btn {
      position: absolute;
      top: 5px;
      right: 5px;
      background: #080b14;
      border: none;
      width: 25px;
      height: 25px;
      font-size: 25px;
      color: $accentColor;
      font-weight: bold;
    }
    p {
      // border: purple solid 1px;
      height: 45%;
      overflow: hidden;
      padding: 10px;
      margin-bottom: 4px;
      overflow: hidden;
      font-size: 0.8rem;
    }
    ul {
      width: 50%;
      list-style: none;
      display: flex;
      justify-content: space-around;
      margin: auto;
      color: $blueColor;
      font-size: 1.1rem;
      font-weight: bold;
      text-decoration: underline;
    }
    .project-links {
      position: absolute;
      width: 100%;
      bottom: 5px;
      display: flex;
      justify-content: space-around;
      height: 35px;
      a {
        background-color: $blueColor;
        color: $accentColor;
        height: 100%;
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
      }
      a:hover {
        background-color: $greyColor;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .flip-card-front {
      background-color: $backgroundColor;
      img {
        margin: auto;
        width: 100%;
        height: 100%;
      }
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
      }
    }
    .flip-card-back {
      font-size: 0.8rem;
    }
  }
}
</style>


