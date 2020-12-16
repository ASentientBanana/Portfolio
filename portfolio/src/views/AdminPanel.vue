<template>
  <div class="admin-body">
    <div v-if="!showForm" class="log-in">
      <label for="password">Admin password</label>
      <input
        v-model="passwordField"
        type="password"
        name="password"
        id="password"
        required
      />
      <p v-if="wrongPassword">Wrong Password... Try again</p>
      <button @click="logInUser">Log in</button>
    </div>
    <form v-if="showForm" action="" method="post">
      <label for="project-name" ref="proj">Project Name</label>
      <input
        type="text"
        v-model="projectName"
        name="project-name"
        id="project-name"
        required
      />
      <label for="project-description">Project Description</label>
      <input
        v-model="description"
        type="text"
        name="project-description"
        id="project-description"
        required
      />

      <label for="project-tech"> Project tech (C++,C#,... etc.)</label>
      <input
        v-model="tech"
        type="text"
        name="project-tech"
        id="project-tech"
        placeholder=""
        required
      />
      <label for="project-git">Project git link</label>
      <input type="text" v-model="git" name="project-git" id="project-git" />
      <label for="project-live">Project Live Link</label>
      <input type="text" v-model="live" name="project-live" id="project-live" />
      <label for="project-image">Project Image</label>
      <input
        type="file"
        @change="imageHandler"
        name="project-image"
        id="project-image"
        required
      />

      <input
        type="submit"
        value="Submit"
        id="project-submit"
        @click="testClick"
      />
    </form>
    <h2 v-if="projectAdded">Project added</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AdminPanel",
  data() {
    return {
      showForm: false,
      wrongPassword: false,
      projectAdded: false,
      projecName: "test1",
      description: "test2",
      tech: "test3",
      git: "test4",
      live: "test5",
      image: "",
      passwordField: "",
    };
  },
  methods: {
    testClick(e: any) {
      e.preventDefault();
      this.sendRequest(this.addToFormData());
    },
    addToFormData() {
      const fd = new FormData();
      fd.append("project_name", this.projecName);
      fd.append("description", this.description);
      fd.append("tech", this.tech);
      fd.append("git", this.git);
      fd.append("live", this.live);
      fd.append("project_image", this.image);
      return fd;
    },
    async sendRequest(formData: FormData) {
      axios
        .post("http://localhost:5000/add-project", formData)
        .then((response) => {
          if (response.data === 200) this.projectAddedShow();
        })
        .catch((e) => console.log(e));
    },
    imageHandler(ev: any) {
      this.image = ev.target.files[0];
    },
    projectAddedShow() {
      this.projectAdded = true;
    },
    logInUser() {
      const fd = new FormData();
      fd.append("password", this.passwordField);
      axios
        .post("http://localhost:5000/log-in", fd)
        .then((response) => {
          if (response.data === 200) this.showForm = true;
          else if (response.data === 401) this.wrongPassword = true;
        })
        .catch((e) => console.log(e));
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";
.admin-body {
  h2 {
    color: $greyColor;
  }
  .log-in {
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
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