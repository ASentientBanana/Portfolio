<template>
  <nav>
    <h3
      v-for="(link, index) in navLinks"
      :class="['nav-link', 'text-animations', link.isSelected]"
      :to="link.to"
      :key="index"
      @click="[link.callback(), select(index)]"
    >
      {{ link.body }}
    </h3>
    <!-- <ContactModal /> -->
  </nav>
</template>


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
  methods: {
    select(index: number) {
      if (index === 0) {
          this.navLinks[0].isSelected = "is-selected";
          this.navLinks[1].isSelected = "null";
      } else {
          this.navLinks[1].isSelected = "is-selected";
          this.navLinks[0].isSelected = "null";
      }
    },
  },
  data() {
    return {
      navLinks: [
        {
          to: "/",
          body: "About Me",
          callback: this.toHomeCallback,
          isSelected: "is-selected",
        },
        {
          to: "/projects",
          body: "Projects",
          callback: this.toProjectsCallback,
          isSelected: "null",
        },
      ],
    };
  },
});
</script>

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
  .is-selected {
    transition: border 1s ease-in-out;
    // border: solid $accentColor 1px;
    animation: selecting 1.5s ease-in-out forwards;
  }
  @keyframes selecting {
    from{
      // border: 1px solid;
    }
    to{
      // border: solid $accentColor 1px;
      background-color: $accentColor;
      color: $backgroundColor;
    }
  }
}
</style>
