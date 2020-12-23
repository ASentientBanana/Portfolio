<template>
  <div class="admin-body">
    <div v-if="!showAddForm" class="log-in">
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
    <form v-if="showAddForm" action="" method="post">
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
        
      />
    </form>
     <div>
        <button @click="testClick">Add</button>
        <button @click="editProject">Update</button>
        
      </div>
    <h2 v-if="projectAdded">Project added</h2>
    <div></div>
    <div v-if="renderList" class="admin-project-list">
      <div v-for="(project, index) in projectList" :key="index">
        <div>
          <img :src="project.image" alt="NO img" />
          <h2>{{ project.name }}</h2>
        </div>
        <div class="edit-delete-btns">
          <button @click="fillProjectData(project)">edit</button>
          <button @click="deleteProject(project.name)">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AdminPanel",
  data() {
    return {
      showAddForm: false,
      wrongPassword: false,
      projectAdded: false,
      projectName: "",
      description: "",
      tech: "",
      git: "",
      live: "",
      image: "",
      created:"",
      renderList: false,
      passwordField: "",
      projectList: [],
    };
  },
  methods: {
    testClick(e: any) {
      e.preventDefault();
      const fd = this.addToFormData();
      this.sendRequest(fd);
    },
    addToFormData() {
      const fd = new FormData();
      fd.append("project_name", this.projectName);
      fd.append("description", this.description);
      fd.append("tech", this.tech);
      fd.append("git", this.git);
      fd.append("live", this.live);
      fd.append("project_image", this.image);

      return fd;
    },
    async sendRequest(formData: FormData) {
      try {
        axios
          .post("http://localhost:5000/add-project", formData)
          .then((response) => {
            if (response.data === 200) this.projectAddedShow();
          })
          .catch((e) => console.log(e));
      } catch (error) {
        console.log(error);
      }
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
          if (response.data === 200) {
            this.showAddForm = true;
            this.getProjectList();
          } else if (response.data === 401) this.wrongPassword = true;
        })
        .catch((e) => console.log(e));
    },
    async getProjectList() {
      try {
        
        const res = await axios.get("http://localhost:5000/get-projects");
        const data = await res.data;
        this.projectList = data;
        console.log(data);
        this.renderList = true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProject(name: string) {
      try {
        const res = await axios
          .delete(`http://localhost:5000/delete-project/${name}`)
          .then((response) => {
            
            this.projectList = response.data;
          })
          .catch((er) => console.log(er));
      } catch (error) {
        console.log(error);
      }
    },
    async editProject() {
      const fd:FormData = this.addToFormData()
      fd.delete('project_image')
      fd.append('project_image',this.image)
      try {
        const res = await axios
          .post('http://localhost:5000/edit',fd)
          .then((response) => {
            this.projectList = response.data;
          })
          .catch((er) => console.log(er));
      } catch (error) {
        console.log(error);
      }
    },
    fillProjectData(proj:any){
      console.log(proj);
      
      this.projectName = proj.name
      this.description = proj.description
      this.tech = proj.tech
      this.git = proj.git
      this.live = proj.live
      this.image = proj.image
    }
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";
.admin-body {
  label,
  p {
    color: $accentColor;
  }
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
  .admin-project-list {
    img {
      height: 100px;
      width: 200px;
    }
  }
}
</style>