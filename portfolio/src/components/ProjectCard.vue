<template>
  <div class="main-project-card-container">
    <div class="flip-card">
      <div :class="[flipState, 'flip-card-inner']">
        <div class="flip-card-front">
          <img
            :src="image"
            :alt="name"
            @click="doAFlip"
            :class="clickEventDisable"
          />
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
            <a :href="github" v-if="github">Github</a>
            <a :href="live" v-if="live">Live</a>
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
      clickEventDisable: "null",
    };
  },
  methods: {
    doAFlip() {
      if (this.flipState === "do-a-flip") this.flipState = "null";
      else this.flipState = "do-a-flip";
      this.disableClick();
    },
    disableClick() {
      if (this.clickEventDisable === "click-event-diable")
        this.clickEventDisable = "null";
      else this.clickEventDisable = "click-event-diable";
    },
  },
});
</script>


<style scoped lang="scss">
@import "../assets/colors/colors.scss";
.main-project-card-container {
  // border:springgreen solid 2px;
  .flip-card {
    background-color: transparent;
    width: 95%;
    min-height: 200px;
    height: 20vh;
    max-height: 300px;
    perspective: 1000px;
    max-width: 500px;
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
    .click-event-diable {
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
      font-size: 1.5rem;
    }
    p {
      display: flex;
      // background-color: red;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      font-size: 1rem;
    }
  }
  .flip-card-back {
    background-color: #080b14;
    color: $accentColor;
    transform: rotateX(180deg);
    padding {
      left: 50px;
    }
    h1 {
      font-size: 1rem;
      padding-top: 3px;
      width: 80%;
      margin: auto;
    }
    div {
      display: block;
    }
    .back-btn {
      position: absolute;
      top: 5px;
      right: 5px;
      background: none;
      border: none;
      width: 25px;
      height: 25px;
      font-size: 25px;
      color: $accentColor;
      font-weight: bold;
      cursor: pointer;
    }
    p {
      height: 55%;
      overflow: hidden;
      padding: 10px;
      margin-bottom: 4px;
      overflow: hidden;
      font-size: 1rem;
      text-align: left;
      // padding-left: 5px;
    }
    ul {
      width: 90%;
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      margin: auto;
      color: $blueColor;
      font-size: 1rem;
      font-weight: bold;
      text-decoration: underline overline 1px;
    }
    .project-links {
      position: absolute;
      width: 100%;
      bottom: 5px;
      display: flex;
      justify-content: space-around;
      height: 20px;
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
    .main-project-card-container {
      .flip-card {
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
  }
}
</style>


