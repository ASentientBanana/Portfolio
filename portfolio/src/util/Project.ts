interface ProjectInterface {
    projectName: string;
    description: string;
    tech: string[];
    git: string | null;
    live: string | null;
    image: any;
}
class Project implements ProjectInterface {
    projectName: string;
    description: string;
    tech: string[];
    git: string | null;
    live: string | null;
    image: any;
    constructor(projectName: string, description: string, tech: string[], git: string | null, live: string | null, image: any) {
        this.projectName = projectName;
        this.description = description;
        this.tech = tech;
        this.git = git;
        this.live = live;
        this.image = image;
    }
}