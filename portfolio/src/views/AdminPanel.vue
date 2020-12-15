<template>
  <div class="admin-body">
    <form action="" method="post">
      <label for="project-name" ref="proj">Project Name</label>
      <input ref="" type="text" name="project-name" id="project-name" />
      <label for="project-description">Project Description</label>
      <input
        ref=""
        type="text"
        name="project-description"
        id="project-description"
      />

      <label for="project-tech"> Project tech (C++,C#,... etc.)</label>
      <input
        ref=""
        type="text"
        name="project-tech"
        id="project-tech"
        placeholder=""
      />
      <label for="project-git">Project git link</label>
      <input ref="" type="text" name="project-git" id="project-git" />
      <label for="project-live">Project Live Link</label>
      <input ref="" type="text" name="project-live" id="project-live" />
      <label for="project-image">Project Image</label>
      <input ref="" type="file" name="project-image" id="project-image" />
      <label for="password">Admin password</label>
      <input ref="" type="password" name="password" id="password" />
      <input
        ref=""
        type="submit"
        value="Submit"
        id="project-submit"
        @click="testClick"
      />
    </form>
    <img :src="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import request from "request-promise";
export default defineComponent({
  name: "AdminPanel",
  data() {
    return {};
  },
  methods: {
    testClick(e: any) {
      e.preventDefault();
    },
    async sendRequest(e: any) {
      // this.postTest();
      await request.post(
        "http://localhost:5000/test",
        {
          body: JSON.stringify({
            test1: "hello",
            test2: "world",
          }),
        },
        (err, res, body) => {
          console.log(res);
        }
      );
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";
.admin-body {
  padding-top: 5vh;
  form {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    label {
      color: $accentColor;
      text-align: left;
    }
  }
}
</style>