<template>
  <div class="home">
    <div class="about-container">
      <div class="about-image">
        <img
          src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_100x100.png"
          alt=""
        />
      </div>
      <p class="about-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        quisquam corrupti provident enim vel eos accusamus ab deleniti iure
        nulla distinctio quod odit at odio, unde perspiciatis facere molestiae
        cumque. Recusandae est illum accusantium rerum quasi maiores porro error
        enim mollitia alias inventore rem iusto, voluptatibus ducimus deleniti
        impedit consequatur eveniet, illo modi, laudantium cum exercitationem
        numquam! Architecto, voluptatum minus. At, minima? Molestias, voluptate
        quo? Quisquam voluptatibus explicabo necessitatibus qui ducimus. Eaque
        perferendis provident laborum corrupti temporibus, iusto libero ipsam
        dolores perspiciatis sapiente ratione voluptate ullam quas hic,
        recusandae dignissimos.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/colors/colors.scss";
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  .about-container {
    padding-top: 15%;
    display: flex;
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
  }
  @media only screen and (max-width: 768px) {
    .about-container {
      flex-direction: column;
      .about-text {
        max-height: 70vh !important;
      }
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
    return {};
  }
});
</script>
