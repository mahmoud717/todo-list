import { projects, showProjects } from './project';

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = false;
  }
}
export default (project, title, description, dueDate, priority) => {
  const todo = new Todo(title, description, dueDate, priority);
  project.projectStore.push(todo);

  localStorage.setItem('Projects', JSON.stringify(projects));
  return todo;
};
export const todoDeleted = (todo, project) => {
  project.projectStore.splice((project.projectStore.indexOf(todo)), 1);
  localStorage.setItem('Projects', JSON.stringify(projects));
  showProjects();
};

export const todoChecked = (todo, state) => {
  todo.checked = state;
  localStorage.setItem('Projects', JSON.stringify(projects));
};


export const todoEventListeners = (newTodo) => {

};