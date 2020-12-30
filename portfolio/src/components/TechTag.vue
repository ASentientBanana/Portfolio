<template>
  <div class="tag" :style="`background-color:${technologies[tagText]};`">
      <div class="hole"></div>
    {{ tagText }}
  </div>
</template>


<style scoped lang="scss">
@import "../assets/colors/colors.scss";
    .tag{
        color: white;
        background-color: none;
        max-width: 100px !important;
        border-top-left-radius: 5px;
        border-top-right-radius: 1px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 1px;
        text-align: justify !important;
        border:solid 1px red;
        .hole{
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: $backgroundColor;
        }
    }
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name:"TechTag",
  props: {
    tagText: String,
    technologies:Object
  },
  data() {
    return {
        color: String,
    };
  },
});
</script>