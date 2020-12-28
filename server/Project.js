class Project {
  constructor(id, name, description, tech, git, image, live, created, updated) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tech = tech;
    this.git = git;
    this.image = image;
    this.live = live;
    this.created = created;
    this.updated = updated;
  }

  toBoj() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      tech: this.tech,
      git: this.git,
      image: this.image,
      live: this.live,
      created: this.created,
      updated: this.updated,
    };
  }
}
