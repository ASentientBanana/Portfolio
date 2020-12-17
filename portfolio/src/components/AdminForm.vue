<template>
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
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>