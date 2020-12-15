import '../assets/style/main.scss';

// import createTodo from './utils/todo';
// import { createProject, projects } from './utils/project';
// import {
//   showProjects, showProjectTodo,
// } from './utils/data';
// import { ProjectHover, TodoHover } from './utils/popups';

const DefaultFile = require('./utils/default');
const todoFile = require('./utils/todo');
const projectFile = require('./utils/project');
const dataFile = require('./utils/data');

const popupsFile = require('./utils/popups');

DefaultFile.loadDefault();

popupsFile.TodoHover();


if (JSON.parse(localStorage.getItem('Projects')).length === 0) {
  const DefaultProject = projectFile.createProject('home', projectFile.projects);
  todoFile.createTodo(DefaultProject, 'This is an initial Todo', 'this is a todo', '2020-12-24', 'high');
}


dataFile.showProjects();
dataFile.showProjectTodo(projectFile.projects[(0)]);
popupsFile.ProjectHover();
