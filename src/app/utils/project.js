class Project {
  constructor(name) {
    this.name = name;
    this.projectStore = [];
  }
}
if (localStorage.getItem('Projects') === null) {
  localStorage.setItem('Projects', JSON.stringify([]));
}

export const projects = JSON.parse(localStorage.getItem('Projects'));


export const createProject = (name, projects) => {
  const newProject = new Project(name);
  projects.push(newProject);
  localStorage.setItem('Projects', JSON.stringify(projects));
  return newProject;
};
