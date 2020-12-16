<template>
  <div class="home">
    <div class="about-container">
      <div class="about-image">
        <img
          :src="require('../assets/images/ljoptica.jpg')"
          alt=""
          @click="typeEffect"
        />
      </div>
      <div class="name-text">
        <h1 title="Petar Kocic">Petar Kocić</h1>
      </div>
      <p class="about-text" ref="aboutText">{{ OutputText }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/colors/colors.scss";
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $backgroundColor;

  // height: 100vh;
  .about-container {
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    h1 {
      margin-top: 2%;
    }
    .about-image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 150px;
        border-radius: 50%;
      }
    }
    .about-text {
      max-width: 50vw;
      padding: 30px;
      display: flex;
      align-items: start;
      text-align: left;
      overflow: auto;
      color: $accentColor;
    }
    .name-text {
      h1 {
        align-items: center;
        justify-content: center;
        margin: 0;
        color: #fff;
        display: inline-block;
        letter-spacing: -2px;
        font-family: courierRegular;
      }

      h1 {
        animation: glitch 1s linear infinite;
      }

      @keyframes glitch {
        2%,
        64% {
          transform: translate(0px, 0) skew(0deg);
        }
        4%,
        60% {
          transform: translate(-2px, 0) skew(0deg);
        }
        62% {
          transform: translate(0, 0) skew(5deg);
        }
      }

      h1:before,
      h1:after {
        content: attr(title);
        position: absolute;
        left: 0;
      }

      h1:before {
        animation: glitchTop 1s linear infinite;
        clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
      }

      @keyframes glitchTop {
        2%,
        64% {
          transform: translate(2px, -2px);
        }
        4%,
        60% {
          transform: translate(0px, 1px);
        }
        62% {
          transform: translate(13px, -1px) skew(-13deg);
        }
      }
      h1:after {
        animation: glitchBotom 1.5s linear infinite;
        clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
        -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
      }

      @keyframes glitchBotom {
        2%,
        64% {
          transform: translate(-2px, 0);
        }
        4%,
        60% {
          transform: translate(-2px, 0);
        }
        62% {
          transform: translate(-22px, 5px) skew(21deg);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .about-text {
      max-height: 70vh !important;
      max-width: 100vw !important;
      font-size: 0.9rem;
    }
  }
}
</style>

<script scoped lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {},
  data() {
    return {
      i: 0,
      baseText: `I am currently going to Uneversity for mechanical engeneering majoring in mechanical design. I am working as a game programmer for an indie studio based in Nis Serbia on the Unity3D Game Engine.
      Aside from University and game development i also work freelance as a front end web developer in technologies like ReactJS and VueJS and make projects in python c# and javascript in my spare time.`,
      OutputText: "",
      speed: 5,
    };
  },
  methods: {
    typeEffect: function () {
      for (let index = 0; index < this.baseText.length; index++) {
        setTimeout(() => {
          this.OutputText += this.baseText[index];
        }, 18 * index);
      }
    },
  },
  mounted() {
    this.typeEffect();
  },
});
</script>
