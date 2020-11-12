<template>
  <div class="home">
    <div class="about-container">
      <div class="about-image">
        <img
          src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_100x100.png"
          alt=""
          @click="typeEffect"
        />
      </div>
      <div class="name-text">
        <h1 title="Petar Kocic">Petar Kocic</h1>
      </div>
      <p class="about-text" ref="aboutText">{{ txt2 }}</p>
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
      border: black solid 1px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .about-text {
      border: black solid 1px;
      padding: 30px;
      display: flex;
      align-items: center;
      text-align: justify;
      overflow: auto;
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
    }
  }
}
</style>

<script scoped lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {},
  data: () => {
    return {
      i: 0,
      txt:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quisquam corrupti provident enim vel eos accusamus ab deleniti iure nulla distinctio quod odit at odio, unde perspiciatis facere molestiae cumque. Recusandae est illum accusantium rerum quasi maiores porro error enim mollitia alias inventore rem iusto, voluptatibus ducimus deleniti impedit consequatur eveniet, illo modi, laudantium cum exercitationem Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quisquam corrupti provident enim vel eos accusamus ab deleniti iure nulla distinctio quod odit at odio, unde perspiciatis facere molestiae cumque. Recusandae est illum accusantium rerum quasi maiores porro error enim mollitia alias inventore rem iusto, voluptatibus ducimus deleniti impedit consequatur eveniet, illo modi, laudantium cum exercitationem ",
      txt2: "",
      speed: 5,
    };
  },
  methods: {
    typeEffect: function () {
      for (let index = 0; index < this.txt.length; index++) {
        setTimeout(() => {
          this.txt2 += this.txt[index];
        }, 8 * index);
      }
    },
  },
  mounted: function () {
    this.typeEffect();
  },
});
</script>
