<template>
  <nav>
    <h3
      class="nav-link text-animations"
      v-for="(link, index) in navLinks"
      :to="link.to"
      :key="index"
      @click="link.callback()"
    >
      {{ link.body }}
    </h3>
    <!-- <ContactModal /> -->
  </nav>
</template>


<style scoped lang="scss">
@import "../assets/colors/colors.scss";
nav {
  border-bottom: solid 1px $accentColor;

  height: 50px;
  display: flex;
  justify-content: space-around;
  .disabled {
    pointer-events: none;
  }
  .nav-link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: $accentColor;
    cursor: pointer;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { stringifyQuery } from "vue-router";
// import ContactModal from './ContactModal.vue'
export default defineComponent({
  name: "NavBar",
  props: ["toHomeCallback", "toProjectsCallback"],
  components: {
    // ContactModal
  },
  data: function () {
    return {
      navLinks: [
        { to: "/", body: "About Me", callback: this.toHomeCallback },
        {
          to: "/projects-and-skills",
          body: "Projects & Skills",
          callback: this.toProjectsCallback,
        },
      ],
    };
  },
});
</script>