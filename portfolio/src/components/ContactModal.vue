<template>
  <div class="main-contact-container">
    <form :class="['contact-form', contactFormState]">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" />
      <label for="email">Email</label>
      <input type="email" name="email" id="email" />
      <label for="contact-form-conetent">Message</label>
      <textarea
        name="content"
        id="contact-form-conetent"
        cols="30"
        rows="10"
      ></textarea>
      <input type="submit" value="Submit" />
    </form>

    <div class="btn-container">
      <div class="container">
        <div class="center">
          <button class="btn" @click="openContactForm">
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              class="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { stringifyQuery } from "vue-router";
export default defineComponent({
  name: "ContactModal",
  components: {},
  data: () => {
    return {
      contactFormState: "null"
    };
  },
  methods: {
    openContactForm: function() {
      this.contactFormState == "open-contact-form"
        ? (this.contactFormState = "null")
        : (this.contactFormState = "open-contact-form");
    }
  }
});
</script> 

<style scoped lang="scss">
@import "../assets/colors/colors.scss";
.main-contact-container {
  .contact-form {
    text-align: justify;
    border-radius: 6px;
    height: 60vh;
    width: 50vw;
    position: fixed;
    top: 25vh;
    left: 25vw;
    padding: 5%;
    display: flex;
    flex-direction: column;
    display: none;
    input[type="text"],
    input[type="email"],
    select {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    textarea {
      width: 100%;
      height: 35%;
      padding: 12px 20px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      background-color: #f8f8f8;
      resize: none;
    }
    textarea:hover {
      
    }
    label {
      color: white;
      font-size: 1.2em;
    }
    input[type="submit"] {
      width: 100%;
      // height: 1%;
      background-color: #4c6faf;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color:#3e5b91;
    }
  }
  .open-contact-form {
    display: block !important;
    background-color: #253a47;
  }

  .btn-container {
    margin-bottom: 5%;
    .container {
      width: 400px;
      height: 400px;
      position: fixed;
      left: 50%;
      top: 95%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .center {
      width: 180px;
      height: 60px;
      position: absolute;
    }

    .btn {
      width: 180px;
      height: 60px;
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
      animation: snakeBorder 1s ease-in-out;
    }

    svg {
      position: absolute;
      left: 0;
      top: 0;
      fill: none;
      stroke: #fff;
      stroke-dasharray: 150 480;
      stroke-dashoffset: 150;
      animation: snakeBorder 5s infinite forwards;
      -webkit-animation-delay: 5s;
    }

    .btn:hover svg {
      stroke-dashoffset: -480;
    }

    .btn span {
      color: white;
      font-size: 18px;
      font-weight: 100;
    }
    @keyframes snakeBorder {
      0% {
        stroke-dashoffset: 150;
      }
      50% {
        stroke-dashoffset: 780;
      }
      100% {
        stroke-dashoffset: 780;
      }
    }
  }
}
</style>


