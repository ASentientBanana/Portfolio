

class Project:
    def __init__(self, project_name, description, tech, git, live, image):
        self.project_name = project_name
        self.description = description
        self.tech = tech
        self.git = git
        self.live = live
        self.image = image
        return

    def getData(self):
        return {
            "projectName": self.project_name,
            "description": self.description,
            "tech": self.tech,
            "git": self.git,
            "live": self.live,
            "image": self.image,
        }
