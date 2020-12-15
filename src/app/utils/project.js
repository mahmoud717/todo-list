/* eslint-disable object-shorthand */
class Project {
  constructor(name) {
    this.name = name;
    this.projectStore = [];
  }
}
if (localStorage.getItem('Projects') === null) {
  localStorage.setItem('Projects', JSON.stringify([]));
}
const projects = JSON.parse(localStorage.getItem('Projects'));


function createProject(name, projects) {
  const newProject = new Project(name);
  projects.push(newProject);
  localStorage.setItem('Projects', JSON.stringify(projects));
  return newProject;
}

module.exports = { projects: projects, createProject: createProject };