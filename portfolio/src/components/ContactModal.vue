<template>
  <div class="main-contact-container">
    <form v-if="contactFormState" class="contact-form">
      <button class="close-contact-form-btn" @click="openContactForm">X</button>
      <h2>Email: mail@petarkocic.net</h2>
      <label requred for="name">Name</label>
      <input v-model="senderName" type="text" name="name" id="name" />
      <label requred for="email">Email</label>
      <input v-model="sender" type="email" name="email" id="email" />
      <label requred for="contact-form-conetent">Message</label>
      <textarea
        v-model="contactBody"
        name="content"
        id="contact-form-conetent"
        cols="30"
        rows="10"
      ></textarea>
      <input @click="sendMail" type="submit" value="Send" />
      <h1 v-if="isSent">Mail sent</h1>
      <div class="social-container">
        <a href="https://github.com/ASentientBanana"><img :src="require('../assets/social/github.png')" alt=""></a>
        <a href="https://www.linkedin.com/in/petar-kocic-74a987190/"><img :src="require('../assets/social/linkedin.png')" alt=""></a>
      </div>
    </form>
    <div class="container">
      <div class="center">
        <button class="btn" @click="openContactForm">
          <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span>Contact</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { stringifyQuery } from "vue-router";
import axios from "axios";
export default defineComponent({
  name: "ContactModal",
  components: {},
  data() {
    return {
      contactFormState: false,
      contactBody: "",
      sender: "",
      senderName: "",
      isSent: false,
    };
  },
  methods: {
    async sendMail(event: any) {
      event.preventDefault();
      axios
        .post("http://api.petarkocic.net/send-mail",{
          senderName:this.senderName,
          sender:this.sender,
          contactBody:this.contactBody
        } )
        .then((response) => {
          if (response.data === 200) {
            this.isSent = true;
            this.contactBody = "";
            this.sender = "";
            this.senderName = "";
          }
        })
        .catch((e) => console.log(e));
    },
    openContactForm: function (e: any) {
      e.preventDefault();
      console.log('c');
      
      this.contactFormState = !this.contactFormState;
    },
  },
});
</script> 

<style scoped lang="scss">
@import "../assets/colors/colors.scss";
.main-contact-container {
  // width: 100vw;
  // height: 50vh;
  .contact-form {
    text-align: justify;
    z-index: 10;
    border-radius: 6px;
    height: 60vh;
    width: 50vw;
    position: fixed;
    top: 25vh;
    left: 25vw;
    padding: 5%;
    display: flex;
    flex-direction: column;
    background-color: $backgroundColor;
    border: solid 1px $greyColor;
    input[type="text"],
    input[type="email"],
    select {
      width: 100%;
      height: 10%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 17px;
      background-color: #e7eaef;
    }
    textarea {
      width: 100%;
      height: 40%;
      padding: 12px 20px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      background-color: #e7eaef;
      resize: none;
      font-size: 17px;
    }
    label {
      color: $accentColor;
      font-size: 1.2em;
    }
    input[type="submit"] {
      width: 100%;
      background-color: #06828e;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color: #9ba8b8;
    }
    .close-contact-form-btn {
      position: absolute;
      top: 0;
      right: 0;
      height: 40px;
      width: 40px;
      background-color: #080b14;
      color: white;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      font-size: 25px;
    }
    .social-container{
      height: 40px;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      img{
        height: 40px;
        width: 40px;
      }
    }
  }
  .open-contact-form {
    display: block !important;
    background-color: #080b14;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: red;
  }
  .container {
    width: 100vw;
    height: 60px;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: -30px;
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
    background-color: $backgroundColor;
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
    animation-delay: 4s;
    -webkit-animation-delay: 4s;
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

@media only screen and (max-width: 768px) {
  .main-contact-container {
    .contact-form {
      textarea{
        height: 30%;
      }
      h2{
        font-size: 0.9rem;
      }
      position: absolute;
      width: 90vw;
      left: 5vw;
    }
  }
}
</style>


