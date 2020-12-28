const axios = require("axios");

class Requests {
  static async getProjects(projectList: any[], callback: Function = () => {}) {
    try {
      const res = await axios.get("http://localhost:3333/api/projects");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteProject() {
    try {
      const res = await axios
        .delete(`http://localhost:3333/delete-project/${name}`)
        .then((response: any) => {
          this.projectList = response.data;
        })
        .catch((er) => console.log(er));
    } catch (error) {
      console.log(error);
    }
  }
}
