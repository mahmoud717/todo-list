export default class Project {
  constructor(name) {
    this.name = name;
    this.projectStore = [];
  }
}

export const projects = []

export const createProject = (name, projects) => {
  const newProject = new Project(name);
  projects.push(newProject);
  return newProject;
};
