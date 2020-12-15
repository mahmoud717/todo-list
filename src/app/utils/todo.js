/* eslint-disable import/no-cycle */
// import { projects } from './project';
// import { showProjects } from './data';
const projectFile = require('./project');
const dataFile = require('./data');

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = false;
  }
}
const createTodo = (project, title, description, dueDate, priority) => {
  const todo = new Todo(title, description, dueDate, priority);
  project.projectStore.push(todo);
  localStorage.setItem('Projects', JSON.stringify(projectFile.projects));
  return todo;
};
const todoDeleted = (todo, project) => {
  project.projectStore.splice((project.projectStore.indexOf(todo)), 1);
  localStorage.setItem('Projects', JSON.stringify(projectFile.projects));
  dataFile.showProjects();
};

const todoChecked = (todo, state) => {
  todo.checked = state;
  localStorage.setItem('Projects', JSON.stringify(projectFile.projects));
};

module.exports.createTodo = createTodo;
module.exports.todoDeleted = todoDeleted;
module.exports.todoChecked = todoChecked;